import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


export default class ShowPost extends Component{

    constructor(props){
        super(props)
        this.state= {
            post:{}
        }
    }
        componentDidMount(){
            const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${this.props.match.params.id}`;

            fetch(URL)
            .then(results => {
                return results.json();
            })
            .then(data => {
                this.setState({post: data})
                console.log('this.state.post', this.state.post);
                // const {postTitle} = this.props.match.params;

        })
            .catch(err=>{
                console.log("errorrrr fetching.");
            })
        }
        render(){
            return(
                <div className="card">
                    <div className="card-block">
                    Title:
                          <h4 className="card-title"> {this.state.post.blogTitle}</h4>

                      <p className="card-text">By <strong>{this.state.post.authorName}</strong></p>
                    </div>
                    <div className="card-block">
                      <blockquote className="card-blockquote">
                        <p>{this.state.post.blogEntry}</p>

                      </blockquote>
                    </div>




                </div>

            )
    }
}
