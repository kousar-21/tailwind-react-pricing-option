import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';



const NavBar = () => {
    const navigationData = [
        {
            id: 1,
            name: "Ural Overview",
            path: "/ural/mountains"
        },
        {
            id: 2,
            name: "Ural History",
            path: "/ural/history"
        },
        {
            id: 3,
            name: "Nature & Wildlife",
            path: "/ural/nature"
        },
        {
            id: 4,
            name: "Travel Guide",
            path: "/ural/travel-guide"
        },
        {
            id: 5,
            name: "Culture & People",
            path: "/ural/culture"
        }
    ];
    const [open, setOpen] = useState(false);

    const Links = navigationData.map(route => <Link key={route.id} route={route}></Link>)

    return (
        <nav className='flex justify-between mx-10 mt-5'>
            <span className='flex' onClick={()=>setOpen(!open)}>
                {
                    open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>
                }

                <ul className={`md:hidden absolute duration-1000 text-lime-500
                    ${open? 'top-6' : '-top-40'}
                    bg-amber-200`}>
                    {
                        Links
                    }
                </ul>
                
                <h3 className='ml-4'>My Navbar</h3>
            </span>


            <ul className='md:flex hidden'>
                {
                    Links
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
            <button>Sign in</button>

        </nav>
    );
};

export default NavBar;