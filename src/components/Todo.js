import React from 'react';

const Todo = props => {
    console.log('to do props:', props)
    return (
        <div 
            className="task" 
            onClick={() => props.toggleTaskStatus(props.taskID)}
        >
            <h2>{props.taskName}</h2>
            <p>Status: {props.taskStatus === true ? 'Completed' : 'Incomplete'} </p>
        </div>
    )
}

export default Todo;