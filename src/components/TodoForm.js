import React from 'react';

const TodoForm = (props) => {
    //console.log("form props:", props)

    return (
        <div>
            <input 
                type='text' 
                name='taskName' 
                placeholder='Enter a task' 
                onChange={props.handleInputChange}
                value={props.value} />
            <button onClick={props.handleAddTask}>Add Task</button>
            <button>Clear Completed</button>
        </div>
    )
};

export default TodoForm;