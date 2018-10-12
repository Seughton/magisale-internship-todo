import { EDIT_TODO } from "../Constants/constants";

export default function editElem(value) {
  return {
    type: EDIT_TODO,
    payload: {
      editElem: {
        value
      }
    }
  }
}