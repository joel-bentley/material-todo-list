import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from 'material-ui/Form';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
  <FormGroup column>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </FormGroup>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
