// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegisterUser from './components/RegisterUser';
import UserList from './components/SendEmail';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <nav>
                    <Link to="/">Register User</Link>
                    <Link to="/users">All Users</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<RegisterUser />} />
                    <Route path="/users" element={<UserList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
