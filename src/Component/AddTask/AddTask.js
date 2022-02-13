import React from 'react';
import { Container } from 'react-bootstrap';

const AddTask = () => {
    return (
        <div>
            <Container>
                <div class="input-group mb-3 w-50 mx-auto">
                    <input type="text" class="form-control" placeholder="Add new task here" />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add Task</button>
                </div>
            </Container>
        </div>
    );
};

export default AddTask;