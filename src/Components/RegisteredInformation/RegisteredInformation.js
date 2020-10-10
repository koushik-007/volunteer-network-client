import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Header from '../Header/Header';
import UserData from '../UserData/UserData';

const RegisteredInformation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [volunteerInfo, setVolunteerInfo] =  useState([]);

    useEffect(() => {
        fetch('https://evening-springs-55497.herokuapp.com/registeredUserInfo?email='+loggedInUser.email, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setVolunteerInfo(data));
    }, [])

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                {
                    volunteerInfo.map(data => <UserData data={data}></UserData>)
                }
                </div>
            </div>
        </div>
    );
};

export default RegisteredInformation;