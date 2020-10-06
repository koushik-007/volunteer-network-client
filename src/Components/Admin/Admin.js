import React, { useEffect, useState } from 'react';
import ShowAdmin from '../ShowAdmin/ShowAdmin';

const Admin = () => {
    const [registerUsers, setRegisterUsers] = useState([]);
    useEffect(()=>{
        
        fetch('http://localhost:5000/admin', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setRegisterUsers(data));

    },[])
    return (
        <div>
            
                <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img src={require('../VolunteerAllImages/logos/Group 1329.png')} width="180px" alt="" loading="lazy"/>
                </a>
                </nav>

                <h2>Volunteer register list</h2>

                <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  {
      registerUsers.map(data => <ShowAdmin data={data}></ShowAdmin>)
  }
</table>
            
        </div>
    );
};

export default Admin;