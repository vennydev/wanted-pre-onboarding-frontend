import React, { useEffect } from 'react';
import axios from 'axios';
import Issue from './Issue';
import { TodoListContainer } from '../styles/TodoStyled';


function TodoList({todoArray, setTodoArray, handleSubmitEditedTodo, onRemove}){
  const getURL = 'https://www.pre-onboarding-selection-task.shop/todos';
  const token = localStorage.getItem('myToken');

  const checkedItemHandler = ({id, isCompleted, todo}) => {
    const updateCompletedTodo = async() => {
      await axios.put(`${getURL}/${id}`, {
        todo: todo,
        isCompleted: !isCompleted
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    };
    updateCompletedTodo();
  };

  useEffect(() => {
    const getTodo = async() => {
      const request = await axios.get(getURL, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setTodoArray(request.data);
    };
    getTodo();
  }, [setTodoArray, token]);

  return (
    <TodoListContainer>
      {todoArray && todoArray.map((el) => (
        <Issue key={el.id} el={el} checkedItemHandler={checkedItemHandler} handleSubmitEditedTodo={handleSubmitEditedTodo} onRemove={onRemove}/>
      ))}
    </TodoListContainer>
  )
}

export default TodoList