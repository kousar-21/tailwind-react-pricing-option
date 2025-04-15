import React from 'react';
import Link from './Link';

const NavBar = () => {
    const navigationData = [
        {
            id: 1,
            name: "Ural Mountains Overview",
            path: "/ural/mountains"
        },
        {
            id: 2,
            name: "Ural History",
            path: "/ural/history"
        },
        {
            id: 3,
            name: "Ural Nature & Wildlife",
            path: "/ural/nature"
        },
        {
            id: 4,
            name: "Ural Travel Guide",
            path: "/ural/travel-guide"
        },
        {
            id: 5,
            name: "Ural Culture & People",
            path: "/ural/culture"
        }
    ];

    return (
        <nav>

            <ul className='flex'>
                {
                    navigationData.map(route => <Link   key={route.id} route={route}></Link>)
                }
            </ul>

            {/* <ul className='flex'>
                {
                    navigationData.map(route => <li className="mr-10"><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}

            {/* <ul className="flex">
                <li className="mr-10"><a href="/">Home</a></li>
                <li className="mr-10"><a href="/about">About</a></li>
                <li className="mr-10"><a href="/blog">Blog</a></li>
            </ul> */}

        </nav>
    );
};

export default NavBar;