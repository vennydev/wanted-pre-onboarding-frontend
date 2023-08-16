import React from 'react'
import { CreateTodoContainer } from '../styles/TodoStyled';

const CreateTodo = ({ handleChange, handleCreate, todoValue }) => {
  return (
    <CreateTodoContainer className='todo-input-wrapper'>
        <input data-testid="new-todo-input" type="text" value={todoValue} onChange={handleChange}/>
        <button data-testid="new-todo-add-button" onClick={handleCreate}>추가</button> 
    </CreateTodoContainer>
  )
}

export default CreateTodo