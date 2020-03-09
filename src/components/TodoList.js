// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    //console.log(props.taskData);
    return (
        <div className="task-list">
            {props.tasks.map(task => {
                return (
                    <Todo 
                        key={task.id}
                        taskID={task.id}
                        taskName={task.name}
                        taskStatus={task.completed}
                        toggleTaskStatus={props.toggleTaskStatus}
                    />
                )
            })}
        </div>
    )
}

export default TodoList;