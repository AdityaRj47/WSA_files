import React from 'react'

const TaskItems = ({index,task,  deleteTask,checkboxUpdate}) => {

  return (
    <>
       
           <li key={index} style={{textDecoration: task.checked ? "line-through" : "none"}}>
            <input type="checkbox" checked={task.checked}
            onChange={()=>checkboxUpdate} />
            {task}
           <button onClick={ deleteTask}id='delete-btn'>Delete</button>
           </li>
       

    </>
  )
}

export default TaskItems;