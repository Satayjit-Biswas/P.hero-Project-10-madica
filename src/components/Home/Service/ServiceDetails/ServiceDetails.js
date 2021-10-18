import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <div className="container">
                <div className="servicedetails_area">
                    <h2>hi my id {id}</h2>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;