import React from 'react';

const TodoForm = (props) => {
    // console.log("form props:", props)

    return (
        <div>
            <form onSubmit={props.handleAddTask}>
                <input 
                    type='text' 
                    name='taskName' 
                    placeholder='Enter a task' 
                    onChange={props.handleInputChange}
                    value={props.value} />
                {/* <button onClick={props.handleAddTask}>Add Task</button> */}
                <button type='submit'>Add Task</button>
                <button onClick={props.handleClearCompleted}>Clear Completed</button>
            </form>
        </div>
    )
};

export default TodoForm;