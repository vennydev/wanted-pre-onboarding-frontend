import React, { useState } from 'react'
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';

function Todo() {
  const [todoArray, setTodoArray] = useState([]);
  const [todoValue, setTodoValue] = useState({
    todo: "",
    done: false,
  });
  
  const handleCreate = (e) => {
    e.preventDefault();
    setTodoArray([
      ...todoArray,
      todoValue
    ]);
    setTodoValue({
      todo: "",
      done: false,
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTodoValue({...todoValue, todo: value});
  }

  return (
    <>
      <TodoList todoArray={todoArray} setTodoArray={setTodoArray}/>
      <CreateTodo 
        handleChange={handleChange} 
        handleCreate={handleCreate}
        todoValue={todoValue}
        />
    </>
  )
}

export default Todo