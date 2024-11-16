import React from 'react'

import Task from './Task';


const TaskList = () => {
  const tasks = ["Complete Assignment","Complete Project","Office Work","Trip","Household Works"]
  return (
    <>
      <h1>Task Lists:</h1>
      <ul>
         {/* <Task taskName={tasks[0]}/>
         <Task taskName={tasks[1]}/>
         <Task taskName={tasks[2]}/>
         <Task taskName={tasks[3]}/>
         <Task taskName={tasks[4]}/> */}
  
           {
            tasks.map((task, index)=>(
              <Task key={index} taskName={task}/>
            ))
           }    
      </ul>
    </>
  )
}

export default TaskList;