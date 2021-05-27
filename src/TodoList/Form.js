import React from "react";
import './style.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function Form(props) {
  return (
    <form onSubmit={props.onSubmit} style={{ paddingLeft: 40, marginTop: 16 ,}}>
      <input 
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="créer une nouvelle taches"
       />

       <input style={{ margin: 26,   margin: 10,}}
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Description"
      />
       <button type="submit">Add ToDo</button>
    </form>

 
  );
}
