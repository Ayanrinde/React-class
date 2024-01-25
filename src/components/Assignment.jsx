import React, { useState } from 'react'

const Tenary = () => {
    // const [name, setName] = useState("SQI template")
    const [allUsers, setAllUsers] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const user = (i) => {
        setFirstName(i.target.value)
    }
    const user1 = (i) => {
        setLastName(i.target.value)
    }
    const user2 = (i) => {
        setEmail(i.target.value)
    }
    const user3 = (i) => {
        setPassword(i.target.value)
    }



    const changeName = () => {
        const newUser = {
            firstName,
            lastName,
            email,
            password,
        };

        setAllUsers((prevUsers) => [...prevUsers, newUser]);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');

        // console.log(allUsers);
    }

    return (
        <div>
                <input type="text" onChange={user} placeholder='first name' value={firstName} />
                <input type="text" onChange={user1} placeholder='last name' value={lastName} />
                <input type="email" onChange={user2} placeholder='Email' value={email} />
                <input type="password" onChange={user3} placeholder='Password' value={password} />
                <button onClick={changeName}>Submit</button>
            {/* <h2>
                {name}
            </h2> */}
            <h1>
                {allUsers.map((user, index) => (
                    <div key={index}>
                        {user.firstName} {user.lastName} {user.email} {user.password}
                    </div>
                ))}
            </h1>

        </div>
    )
}

export default Tenary