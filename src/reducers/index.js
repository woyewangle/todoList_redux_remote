import * as types from '../constants/ActionTypes'
import {deepCopy } from '../actions';

export default (state ={todoList:[],statusOfList: "all"} , action) => {
    console.log("1");
    const newState=deepCopy(state)
    switch (action.type) {
        case types.SHOW_FILTER_LIST:{
            newState.todoList = action.todos
            return newState
        }
        case types.ADD_ITEM:{
          console.log("进reducers_add")
            newState.todoList = action.todos
            return newState
        }
        case types.UPDATE_ITEM_CONTENT:{
            newState.todoList = action.todos
            return newState
        }
        case types.TOGGLE_ACTIVE:{
            newState.todoList = action.todos
            return newState
        }
      case types.COMPONENT_DID_MOUNT:{
        console.log("进reducers")
        newState.todoList = action.todos
        return newState
      }
      default:
            return state
    }
}