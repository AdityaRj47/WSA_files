import React ,{useState}from 'react'
import TodoForm from './TodoForm'
import TaskList from './TaskList'
import './style.css'

const TodoMain = () => {
    const [tasks, storeTasks] = useState([]);
    
// add tasks
   const addTasks = (task) =>{
       storeTasks([...tasks, task]);  //to store and add tasks
   }

//function to delete the tasks
  const handleDeleteTask = (index) =>{
     const presentTask = tasks.filter((_,i) => i!==index);
     storeTasks(presentTask);
  }
//function to handle checkbox
 const handleCheckbox =(index) =>{
    const updatedTasks = tasks.map((task) => 
        task.index === index ?{...task, checked: !task.checked} : task);
    storeTasks(updatedTasks);
 }
  return (
    <div className='todo-container'>
      <h1>To-Do List</h1>
      <TodoForm addTasks={addTasks}/>
      <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} handleCheckbox={handleCheckbox}/>
    </div>
  )
}

export default TodoMain;