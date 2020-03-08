import React from 'react';
import { findAllByTestId } from '@testing-library/react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = [
      {
        name: "Exercise",
        id: 1, 
        completed: false
      },
      {
        name: "Water plants",
        id: 2,
        completed: true
      }
    ];
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList taskData={this.state} />
      </div>
    );
  }
}

export default App;
