import { EDIT_TODO } from "../Constants/constants";

export default function editElem(value,title) {
  return {
    type: EDIT_TODO,
    payload: {
      editElem: {
        value,
        title
      }
    }
  }
}