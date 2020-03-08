import React from 'react';

const TodoForm = (props) => {
    return (
        <div>
            <input type='text' placeholder='Enter a task' />
            <button>Add Task</button>
            <button>Clear Completed</button>
        </div>
    )
};

export default TodoForm;