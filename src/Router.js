import React from 'react'
import { Switch, Route} from 'react-router'
import CurrentRsvs from './containers/CurrentRsvs'
import Login from './containers/Login'
import ParkList from './containers/ParkList'
import Dashboard from './containers/Dashboard'





const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/current" component={CurrentRsvs}/>
            <Route exact path="/list" component={ParkList}/>
            <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
    );
};

export default Router;