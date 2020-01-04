import React, { useState } from 'react';

import Comp1 from './Com1';
import { UserProvider } from './user';
import './style.css';

function App() {
  const [number, setNumber] = useState(0);

  const changeNumberHandler = () => {
    setNumber(c => c + 1);
  };

  return (
    <div className="App">
      The Main App Component {number}
      <UserProvider>
        {' '}
        {/* Our Custom Provider */}
        <Comp1 />
      </UserProvider>
      <button onClick={changeNumberHandler}>Changing Main Component Number 点击App.js里面的按钮，查看组件渲染情况 </button>
    </div>
  );
}

export default App;