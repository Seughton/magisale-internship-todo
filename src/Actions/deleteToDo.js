import { DELETE_TODO } from "../Constants/constants";

export default function deleteElem(index) {
  return {
    type: DELETE_TODO,
    payload: {
      index
    }
  }
}