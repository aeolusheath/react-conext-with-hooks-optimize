import React from 'react';
import { useUser } from './user';

const Comp3 = () => {
  const [user] = useUser();
  console.log('Comp 3------>    render')
  return (
    <div className="comp3">
      Comp3
      <hr />
      <p>{user && user.id}</p>
      <p>{user && user.name}</p>
      <p>{user && user.website}</p>
    </div>
  );
};

export default Comp3;