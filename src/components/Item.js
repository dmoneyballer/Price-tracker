import React, { Component } from "react";

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            currentPrice: 0,
            historicHigh: 0,
            historicLow: 0
        }
    }



}

export default Item;
