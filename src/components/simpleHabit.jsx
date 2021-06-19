import React, { useCallback, useEffect, useRef, useState } from 'react';

const SimpleHabit = () => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    // comonentDidMount & componentDidUpdate
    console.log('mounted & updated', count);
  }, []); // 두번째 인자를 등록하면, 두번째 인자가 변경될 때마다 실행한다. 빈 배열을 등록하면 mount 됐을 때만 호출한다.
  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count"> {count} </span>
      <div className="habit-btns">
        <button className="habit-button habit-increase" onClick={handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
    </li>
  );
};

export default SimpleHabit;
