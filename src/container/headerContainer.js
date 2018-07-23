import {connect} from 'react-redux';
import Header from "../components/Header";
import Todo from "../model/Todo";
import {addItems} from "../API/remoteCallApi"

const mapStateToProps=(state,ownProps)=>{
  return {
  }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
  return {
    onAdd:(content) =>
    {
      addItems(new Todo(content), dispatch)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
