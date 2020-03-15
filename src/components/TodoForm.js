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
                <button type='submit' className="add-btn">Add Task</button>
                <button onClick={props.handleClearCompleted} className="clear-btn">Clear Completed</button>
            </form>
        </div>
    )
};

export default TodoForm;