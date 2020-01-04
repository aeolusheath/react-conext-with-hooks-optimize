import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo
} from 'react'
import axios from 'axios'

const UserContext = React.createContext(undefined);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [random, setRandom] = useState(1);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${random}`;
    axios.get(url).then(res => {
      setUser(res.data);
    }).catch(err => {
      console.error(err)
    });
  }, [random]);

  // 优化
  // step 2 我们点击App.js按钮，发现尽管我们用React.memo包装了com1 但是com3 和 com4依然从新渲染了【和App里面的无关】
  // 因为com3 和com4 使用了UserProvider，引用了里面的value
  // 每一次App从新渲染，UserContext会从新生成新的引用,data 发生了变化
  //   1, changeUser，changeUser变化，那么com3 com4 必然会从新渲染
  //   2, data 会是一个新的引用，那么com3 com4 必然会从新渲染

  // BAD
  // const changeUser = () => {
  //   const randomNumber = Math.floor(Math.random() * 10 + 1);
  //   setRandom(randomNumber);
  // }

  // GOOD
  const changeUser = useCallback(
    () => {
      const randomNumber = Math.floor(Math.random() * 10 + 1);
      setRandom(randomNumber);
    }
  , [])

  // BAD
  // const data = [ user, changeUser ]
  
  // GOOD
  const data = useMemo(()=>[user, changeUser], [user, changeUser])
  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser can only be used inside UserProvider');
  }
  return context;
}

export {
  UserProvider,
  useUser
}