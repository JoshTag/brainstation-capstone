import React, { Component } from 'react';
import './ItemHeader.scss'

export class ItemHeader extends Component {
    render() {

        const { name_enus } = this.props.itemHistory[6];

        return (
            <div>
                 <div className="itemSearch">
                    <h1 className="itemSearch__header">{name_enus}</h1>
                    <div className="itemSearch__searchContainer">
                        <input className="itemSearch__searchContainer__search" type="text" placeholder="search"></input>
                        <button className="itemSearch__searchContainer__btn">SEARCH</button>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default ItemHeader;
