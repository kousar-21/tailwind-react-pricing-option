import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    console.log(pricing)
    const {name,price,info,features} = pricing;
    return (
        <div className='flex flex-col border border-none bg-sky-400 rounded-2xl p-4'>
            {/* card header */}
            <div>
                <h1 className='text-7xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            {/* card body */}
            <div className='bg-blue-300 p-4 rounded-2xl mt-10 flex-1'>
                <p>{info}</p>
                {
                    features.map((feature, index) => <PricingFeatures key={index} feature={feature}></PricingFeatures>)
                }
            </div>
            <button className="btn w-full mt-5 bg-blue-300">Subcribes</button>
        </div>
    );
};

export default PricingCard;