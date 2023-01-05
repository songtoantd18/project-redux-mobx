import { TODO } from "../actionCreator";

export const addNewTodo = (payload) => {
  console.log("payload:", payload);
  return {
    type: TODO.ADD_NEW,
    payload,
  };
};
export const editTask = (payload) => {
  console.log("payload:", payload);
  return {
    type: TODO.EDIT_TASK,
    payload,
  };
};
export const deleteTask = (payload) => {
  console.log("payload:", payload);
  return {
    type: TODO.DELETE_TASK,
    payload,
  };
};
