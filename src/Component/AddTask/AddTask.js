import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const AddTask = () => {

    const [task, setTask] = useState({});

    const handleAddTask = (e) => {
        
    }

    return (
        <div>
            <Container>
                <div class="input-group mb-3 w-75 mx-auto">
                    <input type="text" class="form-control" placeholder="Add Task Here" name="task" />
                    <input type="date" class="form-control" placeholder="Date" name="date" />
                    <input type="number" class="form-control" placeholder="Duration" name="duration" />
                    <input type="text" class="form-control" placeholder="Type" name="type" />
                    <button class="btn btn-outline-secondary" type="button" id="add-task" onClick={handleAddTask}>Add Task</button>
                </div>
            </Container>
        </div>
    );
};

export default AddTask;