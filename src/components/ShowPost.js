import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ShowPost extends Component{

    constructor(){
        super()
        this.state= {
            post:{}
        }
    }

        componentDidMount(){


            let match = this.props.match;
            const { id } = this.props.match.params.id;
            const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;

            this.setState({

            })
            console.log({id});

            fetch(URL)
            .then(results => {
                return results.json();
            })
            .then(stuff=>{
                console.log("fetchingggg!!!");
            })
            .then(data => {

                // const {postTitle} = this.props.match.params;
            })
            .catch(err=>{
                console.log("errorrrr fetching.");
            })
        }
        render(){
            return(
                <div>
                {this.state.post.blogTitle}
                {this.state.post.blo}
                {this.state.post.blogTitle}


                </div>

            )
    }
}
