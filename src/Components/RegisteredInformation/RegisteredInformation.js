import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Header from '../Header/Header';
import UserData from '../UserData/UserData';

const RegisteredInformation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [volunteerInfo, setVolunteerInfo] =  useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/registeredUserInfo?email='+loggedInUser.email, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setVolunteerInfo(data));
    }, [loggedInUser.email])
    console.log(volunteerInfo);
    return (
        <div>
            <Header></Header>
            <div className="row">
                {
                    volunteerInfo.map(data => <UserData data={data}></UserData>)
                }
            </div>
        </div>
    );
};

export default RegisteredInformation;