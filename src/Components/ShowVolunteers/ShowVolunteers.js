import React from 'react';
import { useHistory } from 'react-router-dom';
import './ShowVolunteers.css'
const ShowVolunteers = (props) => {
    const {title, image, id} = props.data;
    const color = ["yellow", "orange", "lightBlue", "blue"];
    const x = Math.floor(Math.random() * 4);

    const history = useHistory();
    const handleRegistraion = () => {
        history.push(`/registration/${id}`);
    }
    return (
        <div className="col-md-3 mb-3">
            <img src={require(`../../images/${image}.png`)} alt="" width="230px"/>
            <div onClick={handleRegistraion} className="homePageCard d-flex align-items-center justify-content-center"  style={{backgroundColor: `${color[x]}`,cursor: "pointer"}}>
                <h5 className="text-white text-center"> {title} </h5>
            </div>
        </div>                 
    );
};

export default ShowVolunteers;