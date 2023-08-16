import React, { useState } from 'react'
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';
import axios from 'axios';
import { TodoContainer } from '../styles/TodoStyled';

function Todo() {
  const [todoArray, setTodoArray] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const URL = 'https://www.pre-onboarding-selection-task.shop';
  const token = localStorage.getItem('myToken');
  
  const handleCreate = async (e) => {
    e.preventDefault();
    if(todoValue === '') return;

    const request = await axios.post(`${URL}/todos`, {
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

  const onRemove = async (id) => {
      await axios.delete(`${URL}/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      const request = await axios.get(`${URL}/todos`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
      });
      setTodoArray(request.data);
  };

  const handleSubmitEditedTodo = async (e, id, isCompleted, editedTodo) => {
    e.preventDefault();
    
    let newTodoData = todoArray.map((data) => {
      if(data.id === id) {
        data.todo = editedTodo;
      }
      return data
    });

     await axios.put(`${URL}/todos/${id}`, {
      todo: editedTodo,
      isCompleted: isCompleted,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setTodoArray(newTodoData);
  };

  return (
    <TodoContainer>
      <TodoList 
        todoArray={todoArray} 
        setTodoArray={setTodoArray}
        handleSubmitEditedTodo={handleSubmitEditedTodo}
        onRemove={onRemove}
        />
      <CreateTodo 
        handleChange={handleChange} 
        handleCreate={handleCreate}
        todoValue={todoValue}
        />
    </TodoContainer>
  )
}

export default Todo