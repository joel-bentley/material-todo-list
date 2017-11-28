import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Card from 'material-ui/Card';

const App = () => (
  <Card>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Card>
);

export default App;
