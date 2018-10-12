import { ToDoElems } from "../components/ToDoElems/ToDoElems";
import { EDIT_TODO, ADD_TODO, DELETE_TODO } from "../Constants/constants";

export default (arrToDo = ToDoElems, action) => {

  const {type, payload} = action;
  let list;

  switch (type) {

    case EDIT_TODO: {
      list = arrToDo;
      return list
    }
    case ADD_TODO: {
      list = [...arrToDo, payload.newElem];
      return list;
    }
    case DELETE_TODO: {
      list = arrToDo;
      return list
    }
    default:

  }
  return arrToDo;
}