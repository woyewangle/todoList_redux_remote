import Todo from '../model/Todo';
import axios from 'axios'
import { showFilterList, deepCopy, add, updateItemContent, toggleActive ,componentDidMount} from '../actions';
const todosAPI = {
  todos: [],


  add(item,dispatch) {
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

  },


  filerByStatus(status,dispatch) {
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
  },

  toggleActive(viewId,status,dispatch) {
    // let todo = this.todos.find(item => item.viewId === viewId);
    // if (todo !== undefined) {
    //   todo.toggleActive();
    // }
    console.log(status);
    if (status=="completed") status="active";
    else status="completed";
    axios.patch(`http://localhost:8080/api/todos/${viewId}`,{
      "status" : status
    })
      .then(function (response) {
        console.log(status);

        axios.get('http://localhost:8080/api/todos')
          .then(function (response) {
            const todolist=response.data._embedded.todos;
            dispatch(toggleActive(todolist));
          })
          .catch(function (error) {
            console.log(error);
          })
        // const todolist=response.data._embedded.todos;
        // // console.log(todolist);
        // dispatch(componentDidMount(todolist));

      })
      .catch(function (error) {
        console.log(error);
      })

  },

  updateItemContent(viewId, content,dispatch) {
    // let todo = this.todos.find(item => item.viewId === viewId);
    // if (todo !== undefined) {
    //   todo.content = content;
    // }
    axios.patch(`http://localhost:8080/api/todos/${viewId}`,{
      "content" :content
    })
      .then(function (response) {
        axios.get('http://localhost:8080/api/todos')
          .then(function (response) {
            const todolist=response.data._embedded.todos;
            dispatch(updateItemContent(todolist));
          })
          .catch(function (error) {
            console.log(error);
          })
        // const todolist=response.data._embedded.todos;
        // // console.log(todolist);
        // dispatch(componentDidMount(todolist));

      })
      .catch(function (error) {
        console.log(error);
      })


  }
};
export default todosAPI;
