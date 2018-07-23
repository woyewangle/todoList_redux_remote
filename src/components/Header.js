import React, {Component} from 'react';

export default class header extends Component {
  constructor(props) {
    super(props);
    this.inputText = React.createRef();
  }

  add= () => {
      const content=this.inputText.current.value;
      this.props.onAdd(content);
      this.inputText.current.value="";
  }

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