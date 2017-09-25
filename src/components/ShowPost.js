import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ShowPost extends Component{



        componentDidMount(){


            let match = this.props.match;
            const { id } = this.props.match.params;
            const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;


            console.log(id);

            fetch(URL)
            .then(results => {
                return results.json();
            })
            .then(stuff=>{
                console.log("fetchingggg!!!");
            })
            .then(data => {

                // const {postTitle} = this.props.match.params;

                let allPosts = data.map((post) =>{

                    if (post._id === id) {

                    return (

                        <div key={post._id} className="card">
                          <div className="card-block">

                          Title: <h4 className="card-title"> {post.blogTitle}</h4>
                            <p className="card-text">By <strong>{post.authorName}</strong></p>
                          </div>
                          <div className="card-block">
                            <blockquote className="card-blockquote">
                              <p>{post.blogEntry}</p>

                            </blockquote>
                          </div>

                        </div>
                    )
                }
            })

            })
            .catch(err=>{
                console.log("errorrrr fetching.");
            })
        }
        render(){
            return(
                <div>

                </div>

            )
    }
}
