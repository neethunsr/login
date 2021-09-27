import React from "react";
import Form from "./Form";

var isLoggedIn = false;
var isRegistered = false;

const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">

      {/*Ternary Operator*/}
      {isLoggedIn ? <h1>Hello</h1> : <Form isRegistered={isRegistered}/>}

      {/*AND Operator*/}
      {currentTime > 12 && <h1>Why are you still working?</h1>}

    </div>
  );
}

export default App;
