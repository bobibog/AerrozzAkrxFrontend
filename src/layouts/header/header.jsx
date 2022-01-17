import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as ArrowDown } from '../../assets/arrow-down.svg';

import './header.scss'

function Header() {
    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);

    return (
        <header className='header'>

            <Link className='header-logo' to='/'>
                <Logo className='logo' />
            </Link>

            <div className='header-link'>
                <Link className='option' to='/shop'> Store <ArrowDown className='header-link-arrowDown' /></Link>
                <Link className='option' to='/shop'> Subscription plans <ArrowDown className='header-link-arrowDown' /></Link>
                <Link className='option' to='/shop'> Share data <ArrowDown className='header-link-arrowDown' /></Link>
                <Link className='option' to='/shop'> Data/History <ArrowDown className='header-link-arrowDown' /></Link>
                <Link className='option' to='/shop'> About us <ArrowDown className='header-link-arrowDown' /></Link>

            </div>

            <div className='header-user'>
                <Link className='option' to='/shop'> Account <ArrowDown className='header-link-arrowDown' /></Link>
                <Link className='option' to='/shop'> 
                UTC: 
{
                    dateState.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: false,
                    })
                } 
                </Link>
            </div>
           
        </header>
    )
}

export default Header
