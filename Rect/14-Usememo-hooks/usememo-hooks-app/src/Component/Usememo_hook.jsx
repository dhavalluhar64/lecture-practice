import React, { useMemo, useState } from "react";

// (1) Usememo Hoks :- usememo hooks calculated  value catch and value memoization

function Usememo_hook() {
  const [count, setcount] = useState(1);

  const handleCountData = () => {
    setcount(count + 1);
  };

  function SumofData(n) {
    console.log(`sumofto`, n);
    let sum = 0;

    for (let i = 1; i <= n; i++) {
      sum += i;
    }

    return sum;
  }

  // const Total1 = SumofData(10000);
  // const Total = SumofData(1000);

  // solve this problem in usemomo Hook

  const [Total, Total1] = useMemo(() => {
    return [SumofData(1000), SumofData(1000)];
  }, []);

  // check time ms function call

  // console.time("time");

  // SumofData(1000);

  // console.timeLog("time");

  // 1 ms upto useusmemo hooks use

  return (
    <>
      <div className="main">
        <div className="child">
          <button onClick={handleCountData}>Count {count}</button>

          <p>Sum of first 1000 Number is {Total}</p>

          <p>Sum of Secons 10000 Number is {Total1} </p>
        </div>
      </div>
    </>
  );
}

export default Usememo_hook;
