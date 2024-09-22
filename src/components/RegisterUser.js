import React, { useState } from 'react';
import { registerUser } from '../services/userService';

function RegisterUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { name, email, dateOfBirth };

        try {
            await registerUser(userData);
            alert('User registered successfully!');
            setName('');
            setEmail('');
            setDateOfBirth('');
        } catch (error) {
            console.error('Error registering user:', error);
            alert('There was an error registering the user.');
        }
    };

    return (
        <div className="form-container">
            <h1>Register User</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterUser;