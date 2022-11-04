import React from 'react';

const Order = ({ order, handelDelete }) => {
    const { img, title, phone, userName, price, _id } = order;

    return (
        <tr>
            <th>

            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-28 h-28 rounded-xl">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{userName}</div>
                        <div className="text-sm opacity-50">Phone: {phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {title}
                <br />
                <span className="badge badge-ghost badge-sm">Price: {price}</span>
            </td>
            <td>Purple</td>
            <th>
                <label>
                    <button onClick={() => handelDelete(_id)} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
        </tr>
    );
};

export default Order;