import React, { useEffect, useState } from 'react';
import ShowAdmin from '../ShowAdmin/ShowAdmin';

const Admin = () => {
    const [registerUsers, setRegisterUsers] = useState([]);
    useEffect(()=>{
        
        fetch('https://evening-springs-55497.herokuapp.com/showRegisters', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setRegisterUsers(data));

    },[true])
    

    const  handleDelete = (id, event) => {
        fetch(`https://evening-springs-55497.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    event.target.parentNode.style.display = 'none';
                }
            })
    }

    return (
        <div>
               <div className="container mb-3">
                   <div className="row">
                       <div className="col-md-3">
                           <div className="d-flex align-itens-center">
                                <nav class="navbar navbar-light">
                                <a class="navbar-brand" href="#">
                                    <img src={require('../VolunteerAllImages/logos/Group 1329.png')} width="180px" alt="" loading="lazy"/>
                                </a>
                                </nav>
                           </div>
                       </div>
                       <div className="col mt-3">
                            <h2>Volunteer register list</h2>
                       </div>
                   </div>
               </div>
               <div className="container">
                   <div className="row">
                       <div className="col-3">
                            <div className="d-flex align-itens-center">
                                <img src={require('../VolunteerAllImages/logos/users-alt 1.png')} alt="" width="30px" height="30"/>
                                <p className="ml-2">Volunteer register list</p>
                            </div>
                       </div>
                       <div className="col">
                       <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col" style={{width: '160px'}}>Registration date</th>
                        <th scope="col">Volunteer list</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        registerUsers.map(data => <ShowAdmin data={data} handleDelete={handleDelete}></ShowAdmin>)
                    }
                </table>
                       </div>
                   </div>
               </div>
            
        </div>
    );
};

export default Admin;