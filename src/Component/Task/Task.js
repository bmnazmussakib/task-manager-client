import React from 'react';
import { Container } from 'react-bootstrap';
import TaskDetails from '../TaskDetails/TaskDetails';

const task = () => {

    const taskData = [
        {
            id: 1,
            title: 'App front end design',
            date: '13/2/2022',
            duration: '30',
            type: 'App Development'
        },
        {
            id: 2,
            title: 'App back end design',
            date: '14/2/2022',
            duration: '30',
            type: 'App Development'
        },
        {
            id: 3,
            title: 'App checking',
            date: '14/2/2022',
            duration: '30',
            type: 'App Development'
        },
        {
            id: 4,
            title: 'App submit',
            date: '15/2/2022',
            duration: '30',
            type: 'App Development'
        }
    ];



    return (
        <div>
            <Container>
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
                        {
                            taskData.map((task, index) => <TaskDetails task={task} key={index} />)
                        }
                    </tbody>
                </table>

            </Container>
        </div>
    );
};

export default task;