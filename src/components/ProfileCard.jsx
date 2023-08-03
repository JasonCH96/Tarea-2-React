import '../components/ProfileCard.css'
import React, { useEffect, useState } from "react";
import generateRandomUsersArray from '../data/users'


const ProfileCard = (props) => {
    const [users, setUsers] = useState([]);

    const generateUsers = () => {
        const randomUsers = generateRandomUsersArray(props.user); 
        setUsers(randomUsers);
    };

    useEffect(() => {
        generateUsers();

    }, []);

    return (
        <div className='ProfileCard'>
            <h1>User</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}><strong>Name:</strong> {user.name},
                    <li key={index}></li><strong>Age:</strong> {user.age},
                    <li key={index}></li><strong>Hobby:</strong> {user.hobby}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProfileCard