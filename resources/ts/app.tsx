import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Top from './components/Top';
import Category from './components/Category';
import Form from './components/Form';
import Search from './components/Search';
import Result from './components/Result';
import Single from './components/Single';
import Login from './components/Login';
import Register from './components/Register';
import MyList from './components/MyList';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Top} />
                <Route path="/category/:category_id" exact component={Category} />
                <Route path="/post" exact component={Form} />
                <Route path="/search" exact component={Search} />
                <Route path="/result" exact component={Result} />
                <Route path="/single/:id" exact component={Single} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/mylist" exact component={MyList} />
            </Switch>
        </BrowserRouter>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(
        <CookiesProvider>
            <App />
        </CookiesProvider>
    , document.getElementById('app'));
}