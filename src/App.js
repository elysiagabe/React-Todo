import React from 'react';
import { findAllByTestId } from '@testing-library/react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          name: 'Exercise',
          id: 1,
          completed: false
        },
        {
          name: 'Water plants',
          id: 2,
          completed: true
        },
        {
          name: 'Buy socks',
          id: 3,
          completed: false
        },
        {
          name: 'Meditate',
          id: 4,
          completed: false
        }
      ],
      taskName: ''
    }
  };

  // Event Handlers
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAddTask = e => {
    e.preventDefault();
    const newTask = { 
      name: this.state.taskName, 
      id: Date.now(), 
      completed: false 
    };
    this.setState({ 
      tasks: [...this.state.tasks, newTask],
      taskName: ''
    });
  }

  handleClearCompleted = e => {
    e.preventDefault();
    const incompleteTasks = this.state.tasks.filter(task => {
      if (task.completed === false) {
        return {...task}
      }
    })
    this.setState({tasks: incompleteTasks})
  }

  toggleTaskStatus = clickedId => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === clickedId) {
        return {...task, completed: !task.completed}
      } else {
        return task
      }
    })
    this.setState({tasks: newTasks})
    console.log(newTasks);
  };

  render() {
    return (
      <div>
        <h1>What do you need to do today?</h1>
        <TodoForm 
          handleInputChange={this.handleInputChange} 
          handleAddTask={this.handleAddTask} 
          handleClearCompleted={this.handleClearCompleted}
          value={this.state.taskName} 
        />
        <TodoList tasks={this.state.tasks} toggleTaskStatus={this.toggleTaskStatus} />
      </div>
    );
  }
}

export default App;
