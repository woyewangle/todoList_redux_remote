import React, {Component} from 'react';

export default class header extends Component {
  constructor(props) {
    super(props);
    this.inputText = React.createRef();
  }

  add=()=>

  render(){
    return(
      <div>
        <input
          className="input-text"
          id="todo-creator"
          ref={this.inputText}
        />
        <div className="button" onClick={this.add}>
          Add
        </div>
      </div>
    );

  }
}