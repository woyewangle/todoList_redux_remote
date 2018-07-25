import Todo from "../model/Todo";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import {updateItemContent1,toggleActive1,filerByStatus} from '../API/remoteCallApi'

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
    statusOfList: state.statusOfList
  }
}
const mapDispatchToProps = dispatch => {
  return {

    onUpdateItemContent: (viewId, content, statusOfList) => {
      updateItemContent1(viewId, content,dispatch)
    },
    onToggleActive: (viewId,status) => {
      toggleActive1(viewId,status,dispatch)
    },
    onComponentDidMount:()=>{
      filerByStatus(Todo.ALL,dispatch);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)