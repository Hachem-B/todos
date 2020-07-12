import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import '../App.css';
import logo from '../hc.png';
import tx from '../tx.png';


const App = () => (
  <div>
    <img src={logo} className="App-logo" alt="logo" /><img src={tx} className="App-tx" alt="logo" />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;