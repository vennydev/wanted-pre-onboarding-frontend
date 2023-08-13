import React, { useState } from 'react'
import CheckBox from '../components/CheckBox'

const Issue = ({el, checkedItemHandler, handleSubmitEditedTodo, onRemove}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(el.todo);

   const handleEdit = (e) => {
    setEditedTodo(e.target.value);
   };
   
   const handleSubmit = (e) => {
     handleSubmitEditedTodo(e, el.id, el.isCompleted, editedTodo)
     setIsEditing(false);
   };
   
  return (
    <>
      <li key={el.id}>
        <label>
          <CheckBox row={el} checkedItemHandler={checkedItemHandler}/>
        </label>
        {!isEditing ? (
            <>
              <span>{el.todo}</span>
              <button data-testid="modify-button" onClick={() => setIsEditing(true)}>수정</button>
              <button data-testid="delete-button" onClick={() => onRemove(el.id)}>삭제</button>
            </>
          ) : (
            <>
              <input data-testid="modify-input" onChange={(e) => handleEdit(e)} value={editedTodo}/>
              <button data-testid="submit-button" onClick={(e) => handleSubmit(e)}>제출</button>
              <button data-testid="cancel-button" onClick={() => setIsEditing(false)}>취소</button>
            </>
          )
        }
      </li>
    </>
  )
}

export default Issue