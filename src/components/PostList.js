import React, { Component } from 'react';

export default class PostList extends Component{

        constructor(){
            super();

            this.state= {
                "authorName":"",
                "blogTitle":"",
                "blogEntry":"",
                entries:[]


            }
        }



        componentDidMount(){
            fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
            .then(results => {
                return results.json();
            })
            // .then(stuff=>{
            //     console.log("the data: ", stuff);
            // })
            .then(data => {
                let entries = data.map((entry, index) =>{
                    return (
                        <div class="card">
                          <div class="card-block">
                            <h4 class="card-title">Title: {entry.blogTitle}</h4>
                            <p class="card-text">By <strong>{entry.authorName}</strong></p>
                          </div>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                          </ul>

                        </div>
                    )
                 })
            });
            this.setState({entries: entries});
        }
    render(){
        return(
            <div>
            {this.state.entries}

            </div>

        )
    }
}
