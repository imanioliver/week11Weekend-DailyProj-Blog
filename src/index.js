import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';



ReactDOM.render(


    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path="/" component={PostList}/>
                <Route path="/create" component={CreatePost}/>
                <Route path="/show" component={ShowPost}/>
            </Switch>
        </BaseLayout>
    </BrowserRouter>






    , document.getElementById('root'));
registerServiceWorker();
