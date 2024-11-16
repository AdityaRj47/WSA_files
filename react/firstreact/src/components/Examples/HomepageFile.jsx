import React from 'react'

import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';

import TaskList from './components/Task List/TaskList';


const HomepageFile = () => {
  return (
    <>
     <Header/>
    {/* <MainBody/> */}
    <TaskList/>
    <Footer/>
    </>
   
   
  )
}

export default HomepageFile;


// homepage file css
// header {
//   gap:20px;
//   justify-items: center;
//   background-color: black;
// }
// header ul{
//   display: flex;
//   list-style: none;
//   text-align: center;
//   margin-bottom: 50px;
// }
// header ul li{
//     margin:10px;
//     color: white;
// }
// main{
//    width: 100%;
//    height:400px;
// }
// footer{
//   color: white;
//   background-color: black;
//   padding: 10px;
//   text-align: center;
//   margin-top: 150px;
// }
