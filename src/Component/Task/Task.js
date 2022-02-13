import React from 'react';
import { Container } from 'react-bootstrap';
import TaskDetails from '../TaskDetails/TaskDetails';

const task = () => {

    const taskData = [
        {
            title: 'App front end design',
            date: '13/2/2022',
            duration: '30',
            type: 'App Development'
        },
        {
            title: 'App back end design',
            date: '14/2/2022',
            duration: '30',
            type: 'App Development'
        },
        {
            title: 'App checking',
            date: '14/2/2022',
            duration: '30',
            type: 'App Development'
        },
        {
            title: 'App submit',
            date: '15/2/2022',
            duration: '30',
            type: 'App Development'
        }
    ];



    return (
        <div>
            <Container>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr className="">
                            <th scope="col">Done</th>
                            <th scope="col">Title</th>
                            <th scope="col">Due</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            taskData.map(task => <TaskDetails task={task}  />)
                        }
                    </tbody>
                </table>

            </Container>
        </div>
    );
};

export default task;