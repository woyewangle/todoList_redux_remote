import { connect } from 'react-redux';
import App from '../App'
import todosAPI from '../API/TodoResourseAPI'
import { showFilterList, deepCopy, add, updateItemContent, toggleActive ,componentDidMount} from '../actions';
import Todo from '../model/Todo';

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList,
        statusOfList: state.statusOfList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAdd: (todo, statusOfList) => {
            todosAPI.add(todo)
            const todos = deepCopy(
                todosAPI.filerByStatus(statusOfList)
            );
            dispatch(add(todos))
        },
        onShowFilterList: statusOfList => {
            const todos = deepCopy(todosAPI.filerByStatus(statusOfList))
            dispatch(showFilterList(todos))
        },
        onUpdateItemContent: (viewId, content, statusOfList) => {
            todosAPI.updateItemContent(viewId, content)
            const todos = deepCopy(todosAPI.filerByStatus(statusOfList))
            dispatch(updateItemContent(todos))
        },
        onToggleActive: (viewId,statusOfList) => {
            todosAPI.toggleActive(viewId)
            const todos = deepCopy(todosAPI.filerByStatus(statusOfList))
            dispatch(toggleActive(todos))
        },
        onComponentDidMount:()=>{
            const todos = deepCopy(todosAPI.filerByStatus(Todo.ALL))
            dispatch(componentDidMount(todos))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)