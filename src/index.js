import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import App from './components/App';

import BaseLayout from './components/BaseLayout.js'
import CreatePost from './components/CreatePost.js'
import PostList from './components/PostList.js'
import ShowPost from './components/ShowPost.js'
import Home from './components/Home'


ReactDOM.render(


    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/create" component={CreatePost}/>
                <Route path="/show/:id" component={ShowPost}/>
                <Route path="/show" component={PostList}/>
            </Switch>
        </BaseLayout>
    </BrowserRouter>






    , document.getElementById('root'));
registerServiceWorker();
