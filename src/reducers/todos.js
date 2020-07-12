const todos = (state = [], action) => {//an empty array as a start (default)
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,//using spread operator ,to start with all the existing items of the array before adding a new one
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>//map to return the result in an array
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
    default:
      return state;
  }
}

export default todos;