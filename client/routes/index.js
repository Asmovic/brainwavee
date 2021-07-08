import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../containers/App';

const Greeting = () => {
    return <div>Good Morning!!!</div>
}

export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/greeting" component={Greeting} />
            </Switch>
        </Router>
    )
}