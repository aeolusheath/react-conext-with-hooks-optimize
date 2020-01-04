import React from 'react';
import { useUser } from './user';

const Comp4 = () => {
  const [user, changeUser] = useUser();
  console.log('Comp 4------>    render')
  return (
    <div className="comp4">
      Comp4
      <hr />
      <p>{user && user.id}</p>
      <p>{user && user.name}</p>
      <p>{user && user.website}</p>
      <button onClick={changeUser}>Change User 点击comonent4 里面的按钮，调用context里面的方法，查看组件渲染情况</button>
    </div>
  );
};

export default Comp4;
