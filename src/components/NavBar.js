import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


export default class NavBar extends Component{

    render(){
        return(
            <nav>
                <ul className="nav">
                  <li className="nav-item">
                    <NavLink className="nav-link active" to="/"> Mani-Script</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/create">Create a New Post</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/show">Show Post</NavLink>
                  </li>
                </ul>

            </nav>
        )
    }
}
