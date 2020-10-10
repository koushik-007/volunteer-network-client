import React from 'react';

const ShowAdmin = (props) => {
    const {fullName, email, date, title, _id} = props.data;

    return (
        <tbody>
            <tr>
                <th scope="row" style={{width: '170px'}}>{fullName}</th>
                <td>{email}</td>
                <td>{date}</td>
                <td>{title}</td>
                <td onClick={()=>props.handleDelete(_id)} style={{cursor: "pointer", width: "105px"}}>delete list</td>
            </tr>
        </tbody>
    );
};

export default ShowAdmin;