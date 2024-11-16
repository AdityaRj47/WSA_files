import React ,{useState}from 'react'

const TodoForm = ({addTasks}) => {
    const [taskName, setTaskName] = useState("");

//function to handle adding of tasks
    const handleAddTask = () =>{
        if(taskName !== ""){
            addTasks(taskName); //taskname added
            setTaskName(""); //after adding clear the space
        }
    }
    
  return (
    <>
      <input id="input-task" type='text' 
        value={taskName} onChange={(event)=> setTaskName(event.target.value)}
        placeholder='Add a new task'/>
    
      <button id='add-task-button' onClick={handleAddTask} style={{marginLeft:"10px"}}>Add</button>
    </>
  )
}

export default TodoForm;