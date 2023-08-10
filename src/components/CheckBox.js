import React, { useState } from 'react'

const CheckBox = ({row, checkedItemHandler}) => {
  const [done, setDone] = useState(row.isCompleted);

  const checkHandler = (row) => {
    setDone(!done);
    checkedItemHandler(row);
  };

  return (
    <>
      <input type="checkbox" onChange={(e) => checkHandler(row)} checked={done}/>
    </>
  )
}

export default CheckBox