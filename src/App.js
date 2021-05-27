import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Bar';
import './App.css';
import TodoList from './TodoList/TodoList';
import Login from './Login/Login';


function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
    <div className="App">
    <NavBar/>
    </div>
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <TodoList />
          </Route>
          <Route path="/Login">
          <Login />
          </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;