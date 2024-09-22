import React, { useEffect, useState } from 'react';
import { getAllusers } from '../services/userService';

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const response = await getAllusers();

                setUsers(response?.data); // Assuming the response is an array of users
            } catch (err) {
                setError('Failed to fetch users.');
                console.error('Error fetching users:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="user-list">
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <strong>{user?.name}</strong> - {user?.email} - {new Date(user?.dateOfBirth).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
