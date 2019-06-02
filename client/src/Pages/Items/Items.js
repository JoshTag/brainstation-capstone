import React, { Component } from 'react';
import Dashboard from '../../Components/Dashboard/Dashboard';
import Graphs from '../../Components/Graphs/Graphs';
import ItemHeader from '../../Components/ItemHeader/ItemHeader'
import './Items.scss';

export class Items extends Component {
    render() {
        return (
            <div className="itemMain">
                <Dashboard />
                <div>
                <ItemHeader />
                <Graphs />
                </div>
            </div>
        )
    }
}

export default Items;
