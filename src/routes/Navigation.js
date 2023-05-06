import React from 'react'

import { Routes, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Products from '../pages/Products';
import Single from '../pages/Single';
import Contact from '../pages/Contact';

export default function Navigation() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Single" element={<Single />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
    )
}


