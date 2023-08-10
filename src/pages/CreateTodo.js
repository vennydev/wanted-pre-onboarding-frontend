import React from 'react'

const CreateTodo = ({ handleChange, handleCreate, todoValue }) => {
  const todo = todoValue.todo;
  return (
    <div className='todo-input-wrapper'>
        <input data-testid="new-todo-input" type="text" value={todo} onChange={handleChange}/>
        <button data-testid="new-todo-add-button" onClick={handleCreate}>추가</button> 
    </div>
  )
}

export default CreateTodo