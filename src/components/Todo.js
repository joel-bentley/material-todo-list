import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

const Todo = ({ onClick, completed, text }) => (
  <FormControlLabel
    control={<Checkbox onChange={onClick} checked={completed} />}
    label={text}
    style={{ marginLeft: 100 }}
  />
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
