import React, { Component } from 'react';

export default class CreatePost extends Component{

    render(){
        return(
            <form>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Author's Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Title</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
              </div>
              <div class="form-group">
                <label for="exampleTextarea">Example textarea</label>
                <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
}
