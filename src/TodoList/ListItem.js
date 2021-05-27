import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';


export default function ListItem(props) {
  const { name, done } = props.todo;
  return (
    <li style={{ textDecoration: done ? "line-through" : "" }}>
      {name}
      {!done ? <Button  variant="success" onClick={props.completed}>Completed</Button> : ""}
      {done ? <Button variant="warning" onClick={props.uncompleted}>uncompleted</Button> : ""}

      <Button variant="danger" onClick={props.remove} >Remove</Button>
    </li>
  );
}
