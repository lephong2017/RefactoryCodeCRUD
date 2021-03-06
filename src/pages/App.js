import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from '../routes';
import Menu from '../components/menu/Menu';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container-crud">
                    <Menu />
                    {this.showContentMenus(routes)}
                </div>
            </Router>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
        // return result;
    }

}

export default App;
