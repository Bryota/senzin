import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Top from './components/Top';
import Category from './components/Category';
import Form from './components/Form';
import Search from './components/Search';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Top} />
                <Route path="/category" exact component={Category} />
                <Route path="/post" exact component={Form} />
                <Route path="/search" exact component={Search} />
            </Switch>
        </BrowserRouter>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}