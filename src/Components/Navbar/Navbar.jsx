import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const style = {'margin': '25px'}
    return (
        <nav>
            <Link style={style} to='/'>Home</Link>
            <Link to='/addUser'>Add User</Link>
        </nav>
    );
};

export default Navbar;