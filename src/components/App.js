import React, {Component, useState} from "react";
import '../styles/App.css';
 
const Heading =()=>{
return(
      <h1>Amazon Clone</h1>
);
}

const Description =() =>{
return(
      <p>I want to Create an Amazon Clone Because it has a lot of function in it.</p>
)
}
const App = () => {
      
      
  return (
    <div id="main">
         <h1 data-ns-test="project-name"><Heading/></h1>
         <p data-ns-test="project-discription"><Description/></p>
         
     </div>
)
}

export default App;
