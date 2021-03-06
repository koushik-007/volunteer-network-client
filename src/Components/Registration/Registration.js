import React, { useContext, useEffect, useState } from 'react';
import './Registration.css';
import logo from '../VolunteerAllImages/logos/Group 1329.png'
import { userContext } from '../../App';
import { useHistory, useParams } from 'react-router-dom';


const Registration = () => {
      const [loggedInUser, setLoggedInUser] = useContext(userContext);
      const [volunteerInformation, setVolunteerInformation] = useState({
            fullName: '',
            email: '',
            organizationName: '',
      });

      const history = useHistory();

      const [volunteerOrgs, setVolunteerOrgs] = useState([]);
      const {id} = useParams();

      useEffect(()=>{
            fetch('https://evening-springs-55497.herokuapp.com/eventDetails/'+id,{
                  method: 'GET',
                  headers: {'Content-Type': 'application/json'}
              })
            .then(res => res.json())
            .then(data => {
                  setVolunteerOrgs(data.find(data => data.id == id));
            });
      },[])
      const {title,image} = volunteerOrgs;

      const handleBlour = (e) => {
                        const newUserInfo = {...volunteerInformation};
                        newUserInfo[e.target.name] = e.target.value;
                        newUserInfo.fullName = loggedInUser.name;
                        newUserInfo.email = loggedInUser.email;
                        newUserInfo.title = title;
                        newUserInfo.image = image;
                        setVolunteerInformation(newUserInfo);
                  }

      const handleSubmit = () => {
            fetch('https://evening-springs-55497.herokuapp.com/addVolunteers', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(volunteerInformation),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err=> console.log(err));
            history.push('/registeredUserInfo');
      }
      
      return (
         <div>
               <div>
                  <div className="d-flex logo justify-content-center">
                        <img src={logo} alt=""/>
                  </div>
               </div>
                  <div className="createCard mb-3">
                       
                        <div className="cardBody">
                        <h3 className="font-weight-bolder mb-4">Register as a Volunteer</h3>
                        <form onSubmit={handleSubmit}>
                              <input type="text" name="fullName"  className="mb-3 createAccountInput" placeholder="Full Name" defaultValue={loggedInUser.name} />
                              <br />
                              <input type="email" name="email" className="mb-3 createAccountInput" placeholder="Username or Email" defaultValue={loggedInUser.email}/>
                              <br />
                              <input type="calender" name="date" onBlur={handleBlour} className="mb-3 createAccountInput" placeholder="Date" required />
                              <br />
                              <input type="text" name="description" onBlur={handleBlour} className="mb-4 createAccountInput" placeholder="Description" required />
                              <input type="text" name="organizationName" className="mb-4 createAccountInput" placeholder="Organize Book At The Library" defaultValue={title} />

                           <input type="submit" value="Registration" className="registerButton mb-3"/>
                        </form>
                        </div>
                  </div>
         </div>
      );
};

export default Registration;