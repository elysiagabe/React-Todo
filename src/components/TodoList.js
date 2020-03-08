// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = ({taskData}) => {
    //console.log(props.taskData);
    return (
        <>
            {taskData.map(task => {
                return (
                    <Todo 
                        taskID={task.id}
                        taskName={task.name}
                        taskStatus={task.completed}
                    />
                )
            })}
        </>
    )
}

export default TodoList;