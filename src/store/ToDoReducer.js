const ToDoReducer = (state, action) => {
  switch (action.type) {
    case ("ADD_TASK"):
      const text = action.payload

      if (text !== "") {
        return [...state, {
              id: state.length === 0 ? 0 : Number(state.slice(-1)[0].id) + 1,
              text: text,
              completed: false
            }
          ]
      } else {
        return state;
      }

    case ("UPDATE_TASK"):
      return state.map((item) => {
        if (item.id === action.id) {
          item.text = action.text;
          return item;
        } else {
          return item;
        }
      });


    case ("DELETE_TASK"):
      console.log(action.id)
      return state.filter( (item) => {
          return item.id !== action.id;
        }
      );

    case ("TOGGLE_COMPLETED"):
      return state.map( (item) => {
        if(item.id === action.id) {
          return {...item, completed: !item.completed};
        } else {
          return item;
        }
      });

    default:
      return state;
  }
}

export default ToDoReducer;