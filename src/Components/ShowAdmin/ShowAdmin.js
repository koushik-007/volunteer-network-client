import React from 'react';

const ShowAdmin = ({title,fullName, email, date}) => {
    return (
        <tbody>
            <tr>
    <th scope="row">{fullName}</th>
    <td>{email}</td>
    <td>{date}</td>
    <td>{title}</td>
            </tr>
        </tbody>
    );
};

export default ShowAdmin;