import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then( res => {
                const fetchedOders = [];
                for(let key in res.data) {
                    fetchedOders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                console.log(res.data);
                this.setState({loading: false, orders: fetchedOders})
            })
            .catch(err => {
                this.setState({})
            });
    }
    render() {
        return (
            <div>
                <Order></Order>
                <Order></Order>
            </div>
        );
    }
}

export default Orders;