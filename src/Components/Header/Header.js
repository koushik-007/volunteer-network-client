import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../VolunteerAllImages/logos/Group 1329.png'
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div className="container mt-3">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <img src={logo} alt="" width="180"/>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-2">
                            <h5>Home</h5>
                        </div>
                        <div className="col-md-2">
                            <h5>Donation</h5>
                        </div>
                        <div className="col-md-2">
                            <h5>Events</h5>
                        </div>
                        <div className="col-md-2">
                            <h5>Blogs</h5>
                        </div>
                        <div className="col-md-3">
                             {
                                 loggedInUser.email ? <h5 style={{width: "131px"}}> {loggedInUser.name} </h5> : <button type="button" class="btn btn-primary">Register</button>
                             }  
                        </div>
                        <div className="col-md-1">
                           {
                               loggedInUser.email ? '' : <Link to="/admin" > <button type="button" class="btn btn-dark">Admin</button> </Link>
                           } 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;