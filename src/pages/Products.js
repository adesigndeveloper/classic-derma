import React from 'react'
import { Link } from 'react-router-dom';

import Header from '../layouts/Header'

export default function Products() {
    return (
        <>
            <Header />
            <div className='p-5 text-center bg-light'>Product Page<br />
                <Link to="/Single">Click Here To View Product Detail</Link>
            </div>
        </>
    )
}
