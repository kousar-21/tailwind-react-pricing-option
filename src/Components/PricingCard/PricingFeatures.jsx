import { TicketCheck } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    return (
        <div>
            <h4 className='bg-cyan-300 mt-5 p-2 rounded-3xl flex'><TicketCheck className='mr-5 text-blue-900'></TicketCheck> {feature}</h4>
        </div>
    );
};

export default PricingFeatures;