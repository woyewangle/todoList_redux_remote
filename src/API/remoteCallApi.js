import React from 'react';
import { add, componentDidMount } from "../actions";
import axios from "axios/index";
import Todo from "../model/Todo";


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

const filerByStatus=(status,dispatch)=> {
  // if (status === Todo.ALL) {
  //   return this.todos;
  // }
  // return this.todos.filter(item => item.status === status);
  // console.log(dispatch);
  //初始化
  if(status===Todo.ALL) status="completed,active";
  axios.get(`http://localhost:8080/api/todos/search/statusOfTodos?status=${status}`)
    .then(function (response) {
      const todolist=response.data._embedded.todos;
      // console.log(todolist);
      dispatch(componentDidMount(todolist));
    })
    .catch(function (error) {
      console.log(error);
    })
}

export {addItems,filerByStatus}