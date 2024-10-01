import React from 'react'
import '../header/Header.css'
import Logo from '../../assests/images/logo.svg'

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
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header