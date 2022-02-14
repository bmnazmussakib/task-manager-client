import React from 'react';
import { Container } from 'react-bootstrap';
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';

const task = ({ task }) => {

    // console.log(task);

    const controlCheckTask = (id) => {

        const myCheck = document.getElementById(id);

        if (myCheck.checked == true) {
            console.log(id);
        }
    }



    return (
        // <tr>
            <>
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
            </>
        // </tr>
    );
};

export default task;