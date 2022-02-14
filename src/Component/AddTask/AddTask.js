import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Task from '../Task/Task';


const AddTask = () => {

    // set the task info from input
    const [task, setTask] = useState(
        {
            task: '',
            date: '',
            duration: '',
            type: '',
        }
    );


    let name, value;

    const handleInput = (e) => {

        // get the input value using onChange
        name = e.target.name;
        value = e.target.value;

        setTask({ ...task, [name]: value })
    }


    const handleAddTask = (e) => {

        // console.log(task);

        fetch('http://localhost:1010/insert', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        e.preventDefault();
    }

    return (
        <div>
            <Container>
                <form action="/insert" method="post"className="input-group mb-3 w-75 mx-auto">
                    <input type="text" className="form-control" placeholder="Add Task Here" name="task" onChange={handleInput} />
                    <input type="date" className="form-control" placeholder="Date" name="date" onChange={handleInput} />
                    <input type="number" className="form-control" placeholder="Duration" name="duration" onChange={handleInput} />
                    <input type="text" className="form-control" placeholder="Type" name="type" onChange={handleInput} />
                    <button className="btn btn-outline-secondary" type="submit" id="add-task" onClick={handleAddTask}>Add Task</button>
                </form>


                <table className="table table-borderless table-hover">
                    <thead>
                        <tr className="" >
                            <th scope="col">Done</th>
                            <th scope="col">Title</th>
                            <th scope="col">Due</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Type</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <Task task={task} />
                        </tr>
                    </tbody>

                </table>
            </Container>
        </div>
    );
};

export default AddTask;