import React from 'react'

const intro = () => {
  
    //  const [count, setCount] = useState(0);
  //   return(
  //     <>
  //       <ClickButton count = {count} handleClick={() =>setCount(count +1)}/>
  //     </>
  //   )









  //without JSX 
  //const element = React.createElement("h1", null,"Hello, World!");

  //with JSX
  //const element = <h1>Hello,React!</h1>
  
 //exapmles 2:Using Variables in JSX
//  const greetings = "Hello React!!!!!!";
//  const element = <h1>{greetings}</h1>
//  return element;
  
//examples 3: count the button clicks
// const [count, setCount] = useState(0);

//count => holds the state value
//setCount => is the function to update it
// return (
//   <div>
//     <h1>You clicked {count} times......</h1>
//     <button onClick={() => setCount(count + 1)}>Click Me!!</button>
//   </div>
//   //count++ wont work because the value is updated in REAL TIME
// )
//examples 4: Conditional rendering in JSX
//  const [isLoggedIn , setIsLoggedIn] = useState(false);

//  //styling in JSX
//  const style ={
//   color: "white",
//   fontSize: "24px",
//   backgroundColor: "lightblue"
//  };

//  return(
//       <div>
//         {isLoggedIn ? <h1>Welcome Back</h1> : <h1>Please Sign In</h1>} 
//         <button onClick ={() => setIsLoggedIn(!isLoggedIn)} style={style}> 
//           {isLoggedIn ? "LogOut" : "LogIn"}
//         </button>
//       </div>
//       )

//examples 5: Using FRAGMENT instead of DIV( keeps the DOM lightweight and code clean)
// return(
//   <>
//     {isLoggedIn ? <h1>Welcome Back</h1> : <h1>Please Sign In</h1>} 
//     <button onClick ={() => setIsLoggedIn(!isLoggedIn)} style={style}> 
//       {isLoggedIn ? "LogOut" : "LogIn"}
//     </button>
//   </>
//   )
  
  //example 6: function call from other Folders
  //function component
  // return(
  //   <>
  //    <DisplayMessage name ="John"/>
  //    <DisplayMessage name ="Johanna"/>

  //   </>
  // );
  
  // example 7: Making codes REUSABLE
// function ClickButton({count, handleClick}){
//   return(
//     <>
//       <h1>You clicked {count} times......</h1>
//         <button onClick={handleClick}>Click Me!!</button>
//    </>
//   );
// }
}

export default intro