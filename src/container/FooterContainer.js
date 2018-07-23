import {connect} from 'react-redux';
import Footer from "../components/Footer";
import {filerByStatus} from "../API/remoteCallApi"


const mapStateToProps=(state,ownProps)=>{
  return {
  }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
  return {
    onShowFilterList:(statusOfList) =>
    {
      filerByStatus(statusOfList,dispatch)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Footer)
