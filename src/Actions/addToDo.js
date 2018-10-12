import { ADD_TODO } from "../Constants/constants";

export  default function addElem(value) {
  return {
    type: ADD_TODO,
    payload: {
      newElem: {
        value
      }
    }
  }
}