import React from 'react'

import { Link } from 'react-router-dom';

// Images
import logo from '../assets/images/logo.png'

// Icons
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Header() {

    return (
        <header id="header">
            <div className='offerInfo'>
                <p><b>Free Shipping on All Orders |</b> Get Extra ₹100 OFF on Spent of ₹999 Use Code: <strong>CLASSIC100</strong></p>
            </div>

            <div className="loginInfo">
                <div className='container'>
                    <div className="row">
                        <div className="col-md-6">
                            <a href="/"><FaMapMarkerAlt /> Tack Order</a>
                        </div>
                        <div className="col-md-6">
                            <ul className='d-flex justify-content-end align-items-center'>
                                <li><a href='/'>Login</a></li>
                                <li><a href='/'>|</a></li>
                                <li><a href='/'>SignUp</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <nav className='navBar'>
                <div className="container">
                    <div className='menuContainer d-flex align-items-center'>
                        <Link to='/' target='_top' className="appLogo text-center">
                            <img src={logo} alt="logo" className='img-fluid' />
                        </Link>

                        <ul className='d-flex align-items-center'>
                            <li>
                                <Link to='/Products'>Products</Link>
                            </li>
                            <li>
                                <Link to='/Contact'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <div className='container-fluid'>
                <div className='row  align-items-center'>
                    <div className='col-md'>
                        <div className='leftPart d-flex align-items-center'>

                            <Link to='/Products' className='contestMenu'>
                                <BsBriefcase />
                                <span>Products</span>
                            </Link>

                            <div className='searchBar'>
                                <input type='text' placeholder='Search...' className='border-0 form-control' />
                                <CiSearch />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">

                    </div>

                    <div className='col-md'>
                        <ul className='rightPart list-unstyled mb-0 d-flex align-items-center justify-content-end'>
                            <li>
                                <Link to="/Login" target='_top' className='d-flex align-items-center themeButton'>
                                    <FiLogIn /> Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </header>
    )
}

