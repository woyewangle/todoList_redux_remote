import React, { Component } from 'react';
import './App.css';
import Header from "./container/headerContainer";
import Footer from "./container/FooterContainer";
import TodoList from "./container/TodoListContainer";

class App extends Component {
  constructor(props) {
    super(props);
  }



  render() {

    return (
      <div className="container">
        <div>
          <h2>Jquery To Do List</h2>http://localhost:8080/api/todos
          <p>
            <em>Simple Todo List with adding and filter by diff status.</em>
          </p>
        </div>
        <Header/>
       <TodoList/>
        <Footer/>


      </div>
    );
  }
}

export default App;
