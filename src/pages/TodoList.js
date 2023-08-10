import React, { useEffect } from 'react';
import axios from 'axios';
import CheckBox from '../components/CheckBox';

function TodoList({todoArray, setTodoArray, onRemove}){
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
    <ul>
      {todoArray && todoArray.map((el) => (
        <li key={el.id}>
          <label>
            <CheckBox row={el} checkedItemHandler={checkedItemHandler}/>
            <span>{el.todo}</span>
          </label>
          <button data-testid="modify-button">수정</button>
          <button data-testid="delete-button" onClick={() => onRemove(el.id)}>삭제</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList