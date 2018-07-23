import React from 'react';
import { add } from "../actions";
import axios from "axios/index";


const addItems=(item,dispatch)=> {
  // this.todos.push(item);
  let lastTodolist=[];
  //先获取原来的值
  axios.get('http://localhost:8080/api/todos')
    .then(function (response) {
      lastTodolist=response.data._embedded.todos;
      axios.post('http://localhost:8080/api/todos',{
        "content":item.content,
        "status":item.status
      })
        .then(function (response) {
          const todolist=response.data;
          lastTodolist.push(todolist);
          dispatch(add(lastTodolist));
        })
        .catch(function (error) {
          console.log(error);
        })
    })

}

export {addItems}