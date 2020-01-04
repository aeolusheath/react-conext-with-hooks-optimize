import React from 'react';
import Comp2 from './Com2';
import { memo } from 'react'

const Comp1 = () => {
  console.log('comp 1 -------render')
  return (
    <div className="comp1">
      Comp1
      <Comp2 />
    </div>
  );
} 

//  优化
//  step 1 ，使用这个会发现每次点击App.js的按钮，修改数字，com1 和 com2都会从新渲染
//  export default Comp1;
//  所以这里使用React.memo优化
export default memo(Comp1);
