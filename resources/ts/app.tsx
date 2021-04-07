import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Top from './components/Top';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Top} />
            </Switch>
        </BrowserRouter>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}