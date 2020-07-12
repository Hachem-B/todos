import { connect } from 'react-redux';
import { VisibilityFilters, toggleTodo } from '../actions'
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(task => task.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(task => !task.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
}

const mapStateToProps = state => ({//return a plain object containing the data that the connected component needs.
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({//dispatching actions to the store.
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(//functions will be called every time when the Redux store state changes.
  mapStateToProps,
  mapDispatchToProps
)(TodoList);