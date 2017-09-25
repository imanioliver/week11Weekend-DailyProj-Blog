import React, { Component } from 'react';

export default class NavBar extends Component{

    render(){
        return(
            <nav>
                <ul className="nav">
                  <li className="nav-item">
                    <NavLink className="nav-link active" to="/"> Mani-Script</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/blueprints">Blueprints</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/roofs">Roofs</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                  </li>
                </ul>

            </nav>
        )
    }
}
