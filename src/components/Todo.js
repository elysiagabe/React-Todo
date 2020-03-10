import React from 'react';

const Todo = props => {
    // console.log('to do props:', props)
    return (
        <div 
            className={`task ${props.taskStatus ? `complete-task` : `incomplete-task` }`}
            onClick={() => props.toggleTaskStatus(props.taskID)}
        >
            <h3>{props.taskName}</h3>
            <p>Status: {props.taskStatus ? 'Completed' : 'Incomplete'} </p>
        </div>
    )
}

export default Todo;