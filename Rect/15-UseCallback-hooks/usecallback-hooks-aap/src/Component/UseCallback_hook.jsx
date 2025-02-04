import React, { memo, useCallback, useState } from "react";
import ChildCompo from "./ChildCompo";

// UseCallback hooks:-  UseCallback hooks use karte hai function memoize karne ke liye

// memo :- memo hooks use karte hai component memoize karne ke liye

const UseCallback_hook = () => {
  const [count, setcount] = useState(0);

  // const handleClick = () => {
  //   setcount(count + 1);
  // };

  // Soluation with useCallbck and memo hooks

  const handleClick = useCallback(() => {
    setcount((prev) => {
      return prev + 1;
    });
  }, []);

  return (
    <>
      <div className="main">
        <h1>UseCallback Hooks</h1>

        <h3>Count {count}</h3>

        <MemoizedChild handleClick={handleClick} />
      </div>
    </>
  );
};

const MemoizedChild = memo(ChildCompo);

export default UseCallback_hook;
