import React from 'react';

const UserData = (props) => {
    const {title, image, fullName, _id, date} = props.data;

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
        <div className="card mt-3" style={{ width: "20rem", margin: "30px", height: "12rem", marginTop: "10px", boxShadow: "5px 5px 5px" }}>
                <div className="col">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid­" style={{marginTop:"1­0px"}} src={require(`../../images/${image}.png`)} alt="" width="150px"/>
                        </div>
                        <div className="col-md-6">
                        <h6 style={{ fontWeight: "600", marginTop: "10px" }}>{fullName}</h6>
                            <p>{title}</p>
                                <p> {date}</p>
                            <button className="btn btn-secondary" onClick={()=>handleDelete(_id)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default UserData;