import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contextAPI/UserContext';
import Order from './Order';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orderInfo?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 409 || res.status === 403) {
                    logOut()
                }
                console.log(res)
                return res.json()
            })
            .then(data => {
                console.log(data)
                setOrder(data)
            })
    }, [user, logOut])

    const handelDelete = (id) => {
        const agree = window.confirm('Your order delete');
        if (agree) {
            fetch(`http://localhost:5000/orderDelete/${id}`, { method: 'DELETE' })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        const remaining = orders.filter(order => order._id !== id);
                        setOrder(remaining);
                        alert('deleted Order');

                    }
                })
        }
    }
    console.log(orders)
    return (
        <div>
            order {orders.length}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <Order order={order} handelDelete={handelDelete} key={order._id}></Order>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Orders;