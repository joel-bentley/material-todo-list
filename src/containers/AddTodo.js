import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div style={{marginBottom: 20}}>
      <form
        onSubmit={e => {
          e.preventDefault();
          input = document.querySelector('input[name=todo]');
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <TextField name="todo" style={{ marginRight: 20 }} />
        <Button raised color="accent" type="submit">
          Add Todo
        </Button>
      </form>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
