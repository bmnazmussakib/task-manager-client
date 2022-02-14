import { Button } from 'bootstrap';
import React from 'react';
import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai';

const TaskDetails = ({ task }) => {

    // console.log(task);

    const controlCheckTask = (id) => {

        const myCheck = document.getElementById(id);

        if (myCheck.checked == true) {
            console.log(id);
        }

        // console.log(id);
    }


    return (
        <tr style={{ border: '1px' }}>
            <th scope="row">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id={task.id} onClick={() => controlCheckTask(task.id)} />
                </div>
            </th>
            <td className="task-title" id="task-title">{task.title}</td>
            <td>{task.date}</td>
            <td>{task.duration}</td>
            <td>{task.type}</td>
            <td><button className="btn btn-warning"><AiOutlineEdit className="" /></button> <button className="btn btn-danger"><AiFillDelete className="" /></button> </td>
            {/* <td><a href="#"><AiOutlineEdit className="fs-3" /></a> <a href="#"><AiFillDelete className="fs-3" /></a> </td> */}
        </tr>
    );
};

export default TaskDetails;