import React from 'react'
import '../header/Header.css'
import Logo from '../../assests/images/logo.svg'
import Compare from '../../assests/images/icon-compare.svg'
import Heart from '../../assests/images/icon-heart.svg'
import Cart from '../../assests/images/icon-cart.svg'
import User from '../../assests/images/icon-user.svg'


import Nav from './nav/Nav'
import Sliders from './slider/Sliders'


function Header() {
    return (
        <>
            <header>
                <div className='container-fluid'>
                    <div className="row">
                        <div className='col-sm-2'>
                            <img src={Logo} />
                        </div>


                        {/* Header Section */}
                        <div className="col-sm-5">
                            <div className='headerSearch d-flex align-items-center'>
                                <div className='selectDrop'>
                                     All Categories
                                </div>
                                <div className='search'>
                                    <input type="text" placeholder='Search for items'  />
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-5'>
                            <div className='headerLeft d-flex align-items-center'>
                            <div className='locationBar'>
                               Your Location
                            </div>
                            <div className='compare'>
                            <img src={Compare} />
                                Compare
                            </div>
                            <div className='wishlist'>
                            <img src={Heart} />
                                WishList
                            </div>
                            <div className='account'>
                            <img src={Cart} />
                                Cart
                            </div>
                            <div className='account'>
                            <img src={User} />
                                Account
                            </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='Header2 '>
                    <Nav/>
                </div>

                <div className='slider '>
                   <Sliders />
                </div>
            </header>
        </>
    )
}

export default Header