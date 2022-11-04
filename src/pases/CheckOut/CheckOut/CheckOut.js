import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contextAPI/UserContext';

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const { img, price, title } = useLoaderData();


    const handelCheckOut = e => {
        e.preventDefault();
        const form = e.target;
        const userName = `${form.firstName.value} ${form.lastName.value}`;
        const email = form.email.value;
        const phone = form.phone.value;
        const messes = form.messes.value;
        const orderInfo = { userName, email, phone, messes, img, price, title };
        fetch('http://localhost:5000/oderInfo', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('wow!!!')
                }
            });
    }
    return (
        <form onSubmit={handelCheckOut}>
            <h2 className="text-3xl font-bold">Check Out</h2>
            <div className=' grid grid-cols-1 gap-4 mb-5 lg:grid-cols-2'>
                <input name='firstName' required type="text" placeholder="First Name" className="input input-bordered w-full " />
                <input name='lastName' required type="text" placeholder="Last Name" className="input input-bordered w-full " />
                <input name='phone' required type="text" placeholder="Type here" className="input input-bordered w-full " />
                <input name='email' required type="email" placeholder="You email" className="input input-bordered w-full " defaultValue={user.email} readOnly />
            </div>
            <textarea name='messes' className="textarea textarea-bordered w-full" placeholder="You Messes"></textarea>
            <input required type="submit" value='Check Out' className="input input-bordered w-full bg-red-700 text-white o" />
        </form>
    );
};

export default CheckOut;