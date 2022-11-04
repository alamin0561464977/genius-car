import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, title, price, _id } = service;
    return (
        <Link to={`/check-out/${_id}`} aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={img}
                    alt=""
                />
                <div className="absolute flex justify-between inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                    <div>
                        <p className="text-md font-medium tracking-wide text-white">
                            {title}
                        </p>
                        <p className="text-sm font-medium tracking-wide text-white">
                            Price: ${price}
                        </p>
                    </div>
                    <h1 className="text-md font-medium tracking-wide text-white">{`=>`}</h1>
                </div>
            </div>
        </Link>
    );
};

export default ServiceCard;