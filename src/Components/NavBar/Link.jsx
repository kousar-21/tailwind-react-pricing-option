import React from 'react';

const Link = ({route}) => {
    return (
        <li className='px-4 lg:mr-10 hover:bg-lime-400'>
            <a href={route}>{route.name}</a>
        </li>
    );
};

export default Link;