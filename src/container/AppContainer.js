// import { connect } from 'react-redux';
// import App from '../App'
// import todosAPI from '../API/TodoResourseAPI'
// import { showFilterList, deepCopy, add, updateItemContent, toggleActive ,componentDidMount} from '../actions';
// import Todo from '../model/Todo';
//
// const mapStateToProps = (state) => {
//     return {
//         todoList: state.todoList,
//         statusOfList: state.statusOfList
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//
//         onUpdateItemContent: (viewId, content, statusOfList) => {
//             // todosAPI.updateItemContent(viewId, content)
//             // const todos = deepCopy(todosAPI.filerByStatus(statusOfList))
//             // dispatch(updateItemContent(todos))
//           todosAPI.updateItemContent(viewId, content,dispatch)
//         },
//         onToggleActive: (viewId,status) => {
//             // todosAPI.toggleActive(viewId)
//             // const todos = deepCopy(todosAPI.filerByStatus(statusOfList))
//             // dispatch(toggleActive(todos))
//           todosAPI.toggleActive(viewId,status,dispatch)
//
//         },
//
//         onComponentDidMount:()=>{
//             // const todos = deepCopy(todosAPI.filerByStatus(Todo.ALL))
//             // dispatch(componentDidMount(todos))
//           todosAPI.filerByStatus(Todo.ALL,dispatch);
//         }
//
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App)