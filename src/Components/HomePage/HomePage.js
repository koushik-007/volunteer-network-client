import React from 'react';
import Header from '../Header/Header';
import ShowVolunteers from '../ShowVolunteers/ShowVolunteers';
import volunteerOrgs from '../VolunteerOrgs/VolunteerOrgs'
const HomePage = () => {
   
    return (
        <div>
            <Header></Header>
            <div className="container mt-5 mb-5">
                <h2 className="text-bolder text-center">I GROW BY HELPING PEOPLE IN NEED </h2>
                <nav class="navbar navbar-light">
                    <form class="form-inline">
                        <div style={{marginLeft: "24rem"}}>
                        <div>
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-primary" type="submit">Search</button>
                            </div>
                        </div>
                 </form>
                </nav>
            </div>
            <div className="container">
                <div className="row">
                {
                    volunteerOrgs.map(data => <ShowVolunteers data={data}></ShowVolunteers> )
                }
                </div>
            </div>
        </div>
    );
};

export default HomePage;