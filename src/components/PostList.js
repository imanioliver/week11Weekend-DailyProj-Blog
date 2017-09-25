import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


export default class PostList extends Component{

        constructor(){
            super();

            this.state= {

                entries:[]


            }
        }



        componentDidMount(){
            fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
            .then(results => {
                return results.json();
            })

            .then(data => {
                let match = this.props.match;
                let entries = data.map((entry, index) =>{

                        let lottaColors = ["#C08497", "#F7AF9D", "#F7E3AF", "#F3EEC3", "#D4E6B5", "#A3B9C9", "#598392", "#124559", "#FFC914", "#17BEBB", "#E4572E"];
                        let randomColor=  lottaColors[Math.floor(Math.random()*(lottaColors.length+1))];
                        let cardStyle= {
                            "color":"white",
                            "backgroundColor":randomColor
                        }


                    return (

                        <div key={index +1} className="card" style={cardStyle}>
                          <div className="card-block">

                          Title: <Link activeClassName="selected" className="navlink" to={`${match.url}/${entry._id}`}>
                                <h4 className="card-title"> {entry.blogTitle}</h4>
                          </Link>
                            <p className="card-text">By <strong>{entry.authorName}</strong></p>
                          </div>
                          <div className="card-block">
                            <blockquote className="card-blockquote">
                              <p>{entry.blogEntry}</p>

                            </blockquote>
                          </div>

                        </div>
                    )
                 })
                 this.setState({entries: entries});
            });
        }
    render(){

        return(
            <div>

            {this.state.entries}
            <Link className="btn btn-large btn-primary" to="/">Back To Home</Link>
            </div>

        )
    }
}
