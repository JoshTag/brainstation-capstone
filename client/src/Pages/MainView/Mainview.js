import React, { Component } from 'react';
import TopItems from '../../Components/DashboardHome/TopItems';
import { Route, Switch } from 'react-router-dom'; 
import DashboardDetails from '../DashboardDetails/DashboardDetails';

export class MainView extends Component {
    render() {
        return (
            <Switch>
                <Route 
                    path={`${this.props.match.path}/details/:item`}
                    render={ (props) => <DashboardDetails 
                        {...props}
                        itemHistory={this.props.itemHistory} />} />

                <Route 
                    render= { () => <TopItems url={this.props.match.url} /> } />
            </Switch>
        )
    }
}

export default MainView;