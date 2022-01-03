import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
      const pro = 'Amazon Clone';
      const des='I want to create a amazon clone';
      
  return (
    <div id="main">
         <h1 data-ns-test="project-name">{pro}</h1>
         <p data-ns-test="project-discription">{des}</p>
         
            
    </div>
)
}

export default App;
