import React,{Component} from 'react'

export default class TodoList extends Component{

  constructor(props) {
    super(props);
  }

  toggleActive(viewId,status) {
    this.props.onToggleActive(viewId,status)
  }

  updateItemContent(viewId, content) {
    const statusOfList = this.props.statusOfList
    console.log("显示"+statusOfList);
    this.props.onUpdateItemContent(viewId, content,statusOfList)
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