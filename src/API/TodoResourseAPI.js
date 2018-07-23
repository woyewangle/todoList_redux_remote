import Todo from '../model/Todo';
import axios from 'axios'
import { showFilterList, deepCopy, add, updateItemContent, toggleActive ,componentDidMount} from '../actions';
const todosAPI = {
  todos: [],


  add(item,dispatch) {
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
            debugger;
            console.log("进入添加reducer");
            const todolist=response.data;
            lastTodolist.push(todolist);
            console.log(lastTodolist);
            dispatch(add(lastTodolist));
          })
          .catch(function (error) {
            console.log(error);
          })
      })
    // this.todos.push(item);



  },


  filerByStatus(status,dispatch) {
    // if (status === Todo.ALL) {
    //   return this.todos;
    // }
    // return this.todos.filter(item => item.status === status);
    // console.log(dispatch);
    axios.get('http://localhost:8080/api/todos')
      .then(function (response) {
        const todolist=response.data._embedded.todos;
        // console.log(todolist);
        dispatch(componentDidMount(todolist));
      })
      .catch(function (error) {
        console.log(error);
      })

  },


  toggleActive(viewId) {
    let todo = this.todos.find(item => item.viewId === viewId);
    if (todo !== undefined) {
      todo.toggleActive();
    }
  },

  updateItemContent(viewId, content) {
    let todo = this.todos.find(item => item.viewId === viewId);
    if (todo !== undefined) {
      todo.content = content;
    }
  }
};
export default todosAPI;
