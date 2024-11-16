import React from 'react'
import TaskItems from './TaskItems'

const TaskList = ({tasks,handleDeleteTask,handleCheckbox }) => {
    // const tasks =[
    //     'Do Laundry and do the dishes',
    //     'Eat food',
    //     'Wash dishes',
    //     'Broom the house'
    // ]
   
  return (
    <>
       <h1>Your Tasks</h1>
       <ul>
         {
            tasks.map((task, index) =>(
                <TaskItems key={index} task={task} 
                deleteTask ={()=> handleDeleteTask(index)}
                checkboxUpdate={() =>handleCheckbox(index)}/>
            ))
         }
       </ul>
    </>
  )
}

export default TaskList;