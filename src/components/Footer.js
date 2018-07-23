import React, {Component} from 'react';
import classNames from "classnames";
import Todo from "../model/Todo";

export default class header extends Component {
  constructor(props) {
    super(props);
  }

  showFilterList= (event) => {
    //console.log(this.state.todos);
    const statusOfList = event.target.attributes.getNamedItem('data-filter')
      .value;
    this.props.onShowFilterList(statusOfList);

  }

  render(){
    return(
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
    );
  }
}