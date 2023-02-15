import React from 'react';


const Task = ({ title, description, deleteTask, index }) => {
  return (
    <div className="task">
      <div>
        <p>Title: {title}</p>
        <span>Description: {description}</span>
        <button onClick={() => deleteTask(index)}>-</button>
      </div>
    </div>
  )
}

export default Task;