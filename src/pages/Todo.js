import React, { useState } from 'react'
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';
import axios from 'axios';

function Todo() {
  const [todoArray, setTodoArray] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const getURL = 'https://www.pre-onboarding-selection-task.shop/todos';
  const token = localStorage.getItem('myToken');
  
  const handleCreate = async (e) => {
    e.preventDefault();
    if(todoValue === '') return;

    const request = await axios.post(getURL, {
      todo: todoValue
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setTodoArray([
      ...todoArray,
      request.data
    ]);

    setTodoValue("");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTodoValue(value);
  };

  return (
    <>
      <TodoList 
        todoArray={todoArray} 
        setTodoArray={setTodoArray}
        />
      <CreateTodo 
        handleChange={handleChange} 
        handleCreate={handleCreate}
        todoValue={todoValue}
        />
    </>
  )
}

export default Todo