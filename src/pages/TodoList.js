import React, { useEffect } from 'react';
import axios from 'axios';

function TodoList({todoArray, setTodoArray}){
  const getURL = 'https://www.pre-onboarding-selection-task.shop/todos';
  const token = localStorage.getItem('myToken');

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
    <ul>
      {todoArray.map((el) => (
        <li>
          <label>
            <input type="checkbox" />
            <span>{el.todo}</span>
          </label>
          <button data-testid="modify-button">수정</button>
          <button data-testid="delete-button">삭제</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList