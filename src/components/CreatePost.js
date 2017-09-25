import React, { Component } from 'react';
// import {NavLink} from 'react-router-dom';



export default class CreatePost extends Component{
    constructor(props){
        super(props);
        this.submitEntry= this.submitEntry.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleEntry = this.handleEntry.bind(this);

        this.state= {
            "authorName":"",
            "blogTitle":"",
            "blogEntry":""

        }
    }

    handleNameChange(event){
        this.setState({
            "authorName": event.target.value,
        })
    }

    handleTitleChange(event){
        this.setState({
            "blogTitle": event.target.value,
        })
    }

    handleEntry(event){
        this.setState({
            "blogEntry": event.target.value,
        })
    }

    submitEntry = (event) =>{
        event.preventDefault();
        this.setState({
            "authorName":event.target.value,
            "blogTitle":event.target.value,
            "blogEntry":event.target.value

        });
        console.log(this.state.authorName);

        let listItem = JSON.stringify(this.state);

        fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/",{
          method: "POST",
          body: listItem,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
          }
        )
        .then(response=> {
        console.log("it is fetching")})
        .then(data=>{
            this.props.history.push('/show')
        })
        .catch(err=>{
            console.log("error fetching data");
        })
        this.setState({authorName: '', blogTitle: '', blogEntry: ""});

    }

    render(){
        return(
            <div className="container">
            <form onSubmit={this.submitEntry}>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Author's Name</label>
                <input onChange={this.handleNameChange} type="text" className="form-control" id="formGroupExampleInput" value={this.state.authorName} placeholder="Example input"/>
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Title</label>
                <input onChange={this.handleTitleChange} type="text" className="form-control" id="formGroupExampleInput2" value={this.state.blogTitle} placeholder="Another input"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleTextarea">Write your blog...</label>
                <textarea onChange={this.handleEntry} className="form-control" id="exampleTextarea" rows="3" placeholder="Your post" value={this.state.blogEntry} ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        )
    }
}
