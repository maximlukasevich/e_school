import React from 'react';
import './profile.css'

const Profile = (props) => {
    return (
        <div className="container">
            <div className="profile-header">
                <h2>{props.username} Лукасевич Максим Анатолійович</h2>
            </div>
            <div className="main-content">

            </div>
        </div>
    );
};

export default Profile;
