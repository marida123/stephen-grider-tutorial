import React from "react";
import  ReactDOM from "react-dom";


const API_KEY=AIzaSyDeo97OtFkyZOz-YUJLDP0Cs2gIexoRXR4;


//create a new component. This component should produce some HTML

const App=() =>{
    return <div>Hi!</div>;
}

// Take this components generated HTML and put it on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector(".container"));