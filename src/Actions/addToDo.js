import { ADD_TODO } from "../Constants/constants";

export  default function addElem(value,title) {
  return {
    type: ADD_TODO,
    payload: {
      newElem: {
        value,
        title
      }
    }
  }
}