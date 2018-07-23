import React, { Component } from 'react';
//import Counters from './components/CounterGroup'
import './App.css';
import Todo from './model/Todo';
import TodoItem from './components/TodoItem';
import classNames from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    //this.todosAPI = todosAPI;

    // this.state = {
    //   todos: [],
    //   statusOfList: Todo.ALL
    // };
  }

  componentDidMount() {
    // this.setState({
    //   todos: this.deepCopy(this.todosAPI.filerByStatus(Todo.ALL))
    // });
    this.props.onComponentDidMount()
  }

  add(event) {
    if (event.keyCode === 13 || event.button === 0) {
      // console.log(statusOfList)
      const content=this.refs.newItem.value;
      const statusOfList = this.props.statusOfList
      this.props.onAdd(content,statusOfList)
      // console.log("添加完毕");
      // this.componentDidMount();
      this.refs.newItem.value = '';
    }

  }

  toggleActive(viewId,status) {
    // this.todosAPI.toggleActive(viewId);
    // const todos = this.deepCopy(
    //   this.todosAPI.filerByStatus(this.state.statusOfList)
    // );
    // this.setState({ todos });

    // console.log(viewId);
    this.props.onToggleActive(viewId,status)
  }

  showFilterList(event) {
    //console.log(this.state.todos);
    const statusOfList = event.target.attributes.getNamedItem('data-filter')
      .value;
    console.log("显示"+statusOfList);
    this.props.onShowFilterList(statusOfList)

  }

  updateItemContent(viewId, content) {
    const statusOfList = this.props.statusOfList
    this.props.onUpdateItemContent(viewId, content,statusOfList)
    // this.todosAPI.updateItemContent(viewId, content);
    // const todos = this.deepCopy(
    //   this.todosAPI.filerByStatus(this.state.statusOfList)
    // );
    // this.setState({ todos, statusOfList: this.state.statusOfList });
  }

  // deepCopy(array) {
  //   return JSON.parse(JSON.stringify(array));
  // }

  render() {

    return (
      <div className="container">
        <div>
          <h2>Jquery To Do List</h2>
          <p>
            <em>Simple Todo List with adding and filter by diff status.</em>
          </p>
        </div>
        <div>
          <input
            className="input-text"
            onKeyUp={e => this.add(e)}
            id="todo-creator"
            ref="newItem"
          />
          <div className="button" onClick={e => this.add(e)}>
            Add
          </div>
        </div>
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
                    this.updateItemContent(viewId, content)
                  }
                />
              ));
            })()}
          </ol>
        </div>
        <div>
          <ul className="filters">
            <li>
              <a
                href="#all"
                onClick={e => this.showFilterList(e)}
                data-filter="all"
                className={classNames({
                  selected: this.props.statusOfList === Todo.ALL
                })}
              >
                ALL
              </a>
            </li>
            <li>
              <a
                href="#active"
                onClick={e => this.showFilterList(e)}
                data-filter="active"
                className={classNames({
                  selected: this.props.statusOfList === Todo.ACTIVE
                })}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#completed"
                onClick={e => this.showFilterList(e)}
                data-filter="completed"
                className={classNames({
                  selected: this.props.statusOfList === Todo.COMPLETED
                })}
              >
                Complete
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
