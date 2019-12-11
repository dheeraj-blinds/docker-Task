import React, { useEffect, useState } from 'react';
import axios from "axios";
import OrderTable from '../../containers/OrderTable/OrderTable';
import { appConstants } from '../../constants';

const Orders = () => {
    const [data, setData] = useState({ orders: [], isFecthing: false });

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setData({ orders: data.orders, isFetching: true });
                const response = await axios.get('http://localhost:5065/api/orders');
                setData({ orders: response.data, isFetching: false });
            } catch (e) {
                console.log(e);
                setData({ orders: data.orders, isFetching: false });
            }
        };
        fetchOrders();
    }, []);


    return (
        <div className="container" style={{ padding: '6rem 0' }}>
            <OrderTable data={data.orders}
                isFetching={data.isFetching}
            />
        </div>
        )

}

export default Orders;