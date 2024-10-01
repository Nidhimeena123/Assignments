import React from 'react'
import Button from '@mui/material/Button';
import '../../header/nav/Nav.css'

function Nav() {
    return (
        <>
            <nav>
                <div className='container-fluid2'>
                    <div className="d-flex justify-content-between py-4">
                        <div className='px-5'>
                            <button type="button" class="btn btn-success btn-sm py-2 fs-6">
                                Browse All Categories
                            </button>
                        </div>

                        <div className=''>
                            <div className='Sections d-flex align-items-center px-5'>
                                <div className='Deals px-3'>
                                    Hot Deals
                                </div>
                                <div className='Home px-3'>
                                    <div class="dropdown">
                                        <button class="btn  dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Home
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Home 1</a></li>
                                            <li><a class="dropdown-item" href="#">Home 2</a></li>
                                            <li><a class="dropdown-item" href="#">Home 3</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='About px-3'>
                                    About
                                </div>
                                <div className='Shop px-3'>
                                    Shop
                                </div>
                                <div className='Vendors px-3'>
                                    Vendors
                                </div>
                                <div className='Mega-menu px-3'>
                                    Mega menu
                                </div>
                                <div className='Blog px-3'>
                                    Blog
                                </div>
                                <div className='Pages px-3'>
                                    Pages
                                </div>
                                <div className='Contact px-3'>
                                    Contact
                                </div>
                            </div>

                        </div>

                        <div>
                            <div className='number'>
                                1900 - 888
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav