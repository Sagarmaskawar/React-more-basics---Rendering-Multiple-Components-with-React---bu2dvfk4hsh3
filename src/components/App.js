import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
      const Heding ="Amazon Clone";
      const Descriptio="I want to create a amazon clone";
      
  return (
    <div id="main">
         <h1 data-ns-test="project-name">{Heading}</h1>
         <p data-ns-test="project-discription">{Description}</p>
         
     </div>
)
}

export default App;
