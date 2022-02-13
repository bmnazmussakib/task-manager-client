import React from 'react';
import AddTask from '../AddTask/AddTask';
import Task from '../Task/Task';

const Home = () => {
    return (
        <div>
            <h1 className="text-center text-info">TASK MANAGER</h1>
            <Task />
        </div>
    );
};

export default Home;