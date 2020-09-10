import { IMAGE } from "./Product";
import { v4 as uuidv4 } from "uuid";

export const initialState = {
  basket: [],
  user: {},
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: [...state.basket].filter(
          (_item) => _item._id !== action.item._id
        ),
      };
    case "SET_USER":
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default reducer;
