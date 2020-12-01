import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar(props) {
    return (
        <div className=" jumbotron jumbotron-fluid bg-dark text-white">
            <div className="container   ">

                <NavLink exact to='/' className='btn btn-info mx-2'>Home</NavLink>
                <NavLink to='/JoinPage'  className='btn btn-info mx-2'>Join</NavLink>
                <NavLink to='/CreatePage'  className='btn btn-info mx-2'>Create</NavLink>
                <NavLink to='/AboutPage'  className='btn btn-info mx-2'>About</NavLink>
            </div>
        </div>
    );
}

export default NavBar;