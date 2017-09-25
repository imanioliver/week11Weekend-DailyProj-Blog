import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


export default class NavBar extends Component{

    render(){
        return(
            <nav>
                <ul className="nav">
                  <li className="nav-item">
                    <NavLink activeClassName="selected" className="navlink" to="/"> Mani-Script</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="selected" className="navlink" to="/create">Create a New Post</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="selected" className="navlink" to="/show">Show Post</NavLink>
                  </li>
                </ul>

            </nav>
        )
    }
}
