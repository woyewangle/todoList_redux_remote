import React,{Component} from 'react'
import TodoItem from "./TodoItem";

export default class TodoList extends Component{

  constructor(props) {
    super(props);
  }

  toggleActive(viewId,status) {
    this.props.onToggleActive(viewId,status)
  }

  updateItemContent(viewId, content) {
    const statusOfList = this.props.statusOfList
    this.props.onUpdateItemContent(viewId, content,statusOfList)
  }

  componentDidMount() {
    this.props.onComponentDidMount()
  }

  render(){
    return(
      <div>
        <ol>
          {(() => {
            console.log(this.props.todoList);
            return this.props.todoList.map(item => (
              <TodoItem
                item={item}
                key={item.id}
                toggleActiveHandler={() => this.toggleActive(item.id,item.status)}
                updateItemContent={(viewId, content) =>
                  this.updateItemContent(item.id, content)
                }
              />
            ));
          })()}
        </ol>
      </div>
    );
  }
}