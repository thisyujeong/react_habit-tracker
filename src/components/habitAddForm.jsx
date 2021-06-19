import React, { memo } from 'react';

// state가 따로 없다면 함수형 컴포넌트 사용
const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);

    /* new habit 등록 후 input 비우기 - 방법 1, 방법 2*/
    // inputRef.current.value = '';
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input ref={inputRef} type="text" className="add-input" placeholder="Habit" />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
