import { TODO } from "../actionCreator";

const initialValue = [
  {
    id: "0",
    title: "learn redux",
    creator: "hoang loc",
    description: "learn redux 3 days",
    status: "New",
  },
];
const todos = (state = initialValue, action) => {
  console.log("action:", action);
  switch (action.type) {
    case TODO.ADD_NEW:
      return [...state, action.payload];

    case TODO.EDIT_TASK:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};
export default todos;
