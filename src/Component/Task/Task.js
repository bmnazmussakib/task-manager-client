import React from 'react';
import { Container } from 'react-bootstrap';
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';

const allTask = ({ allTask }) => {

    // console.log(allTask);

    const controlCheckAllTask = (id) => {

        const myCheck = document.getElementById(id);

        if (myCheck.checked == true) {
            console.log(id);
        }
    }


    const handleDelete = (id) => {
        console.log(id);


        fetch(`http://localhost:1010/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log("deleted successfully");
                console.log(data);
            })
            .catch(err => console.log(err));
        // console.log(typeof(id), id)
    }



    return (
        <tr>
            <th scope="row">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id={allTask.id} onClick={() => controlCheckAllTask(allTask.id)} />
                </div>
            </th>
            <td className="allTask-title" id="allTask-title">{allTask.title}</td>
            <td>{allTask.date}</td>
            <td>{allTask.duration}</td>
            <td>{allTask.type}</td>
            <td><a href="/edit" className="btn btn-warning"><AiOutlineEdit className="" /></a> <button href="/delete" className="btn btn-danger" onClick={() => handleDelete(allTask.id)}><AiFillDelete className="" /></button> </td>
        </tr>
    );
};

export default allTask;