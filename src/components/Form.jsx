import React,{useState} from "react";
import Input from "./Input";

function Form(props) {
  const [color, setcolor] = useState(false);

  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.isRegistered && <Input type="password" placeholder="Confirm Password" />}
      <button 
        style={{ backgroundColor: color ? "black" : "white" }} 
        onMouseOver={() => setcolor(true)}
        onMouseOut={() => setcolor(false)} 
        type="submit">
        {props.isRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
