import { ADD_TODO, DELETE_TODO, REMOVE_TODO } from "../actions/index";

const initialData = {
  list: [],
};

const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case DELETE_TODO:
      const update = state.list.filter((val) => val.id !== action.id);
      return {
        list: update,
      };

    case REMOVE_TODO:
      return {
        list: [],
      };

    default:
      return state;
  }
};

export default todoReducer;
