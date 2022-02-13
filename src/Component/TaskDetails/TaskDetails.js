import React from 'react';

const TaskDetails = ({ task }) => {

    


    return (
        <tr>
            <th scope="row">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="myCheck"/>
                </div>
            </th>
            <td className="text-danger task-title" id="task-title">{task.title}</td>
            <td>{task.date}</td>
            <td>{task.duration}</td>
            <td>{task.type}</td>
        </tr>
    );
};

export default TaskDetails;