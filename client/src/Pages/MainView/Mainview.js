import React, { Component } from 'react';
import TopItems from '../../Components/DashboardHome/TopItems';
import { Route, Switch } from 'react-router-dom'; 
import DashboardDetails from '../DashboardDetails/DashboardDetails';
import axios from 'axios';

export class MainView extends Component {

    state = {
        itemHistory: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/details/117`)
        .then(response => {
            this.setState({
                itemHistory: response.data,
                dashboardHome: false
            })
        })
        .catch(error => {
            alert('ERROR');
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // if (this.props.match.params.item && prevProps.match.params.item !== this.props.match.params.item) {
        // }
            axios.get(`http://localhost:8080/details/117`)
                .then(response => {
                    this.setState({
                        itemHistory: response.data,
                        dashboardHome: false
                    })
                })
                .catch(error => {
                    alert('ERROR');
                });
        }


    render() {

        console.log(this.props)

        return (

            <Switch>
                <Route 
                    path={`${this.props.match.path}/details/:item`}
                    render={ (props) => <DashboardDetails 
                        {...props}
                        itemHistory={this.props.itemHistory}
                        priceGraph={this.props.priceGraph}
                        quantGraph={this.props.quantGraph}
                        priceQuantGraph={this.props.priceQuantGraph} />}
                    />

                <Route 
                    render= { () => <TopItems url={this.props.match.url} />  }
                    />
            </Switch>

        )
    }
}

export default MainView;