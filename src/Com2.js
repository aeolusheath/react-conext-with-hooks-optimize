import React from 'react';
import Comp3 from './Com3';
import Comp4 from './Com4';

const Comp2 = () => {
  console.log('comp 2 -------> render')
  return (
    <div className="comp2">
      Comp2
      <div className="compContainer">
        <Comp3 />
        <Comp4 />
      </div>
    </div>
  );


}

export default Comp2;