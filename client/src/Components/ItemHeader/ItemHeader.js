import React, { Component } from 'react';
import './ItemHeader.scss'

export class ItemHeader extends Component {
    render() {

        // const { name_enus } = this.props.itemHistory;

        // const getItem = () => {
        //     this.props.itemHistory.filter(item => 
        //         item.item === '117').map(obj => obj.item);
        //         }

        // console.log(getItem)

        return (
            <div>
                 <div className="itemSearch">
                    <h1 className="itemSearch__header">ITEM = {}</h1>
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
