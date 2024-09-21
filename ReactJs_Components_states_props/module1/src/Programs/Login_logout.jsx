import React from 'react'

function Login_logout() {
    return (
        <>
            <div className=' my-5 text-center'>
                {/* LOGIN */}
                <div className='bg-secondary-subtle w-50  m-auto my-5 rounded'>
                    <nav className="navbar bg-primary m-3 rounded py-3 ">
                        <div className="container-fluid ">
                            <a className="navbar-brand text-white">Navigation</a>
                                <button className="btn btn-outline-success bg-secondary-subtle text-dark px-5" type="submit">Login</button>
                        </div>
                    </nav>
                    <div className='bg-body-tertiary mx-3 rounded d-flex align-items-sm-center' style={{height:'300px'}}>
                        <h2 className=''>Public Views</h2>
                    </div>
                    <div className=' bg-primary  m-3 rounded py-2'>
                        <h1 className='text-white'>Footer</h1>
                    </div>
                </div>


                {/* LOGOUT */}
                <div className='bg-secondary-subtle w-50  m-auto my-5 rounded'>
                    <nav className="navbar bg-primary m-3 rounded py-3 ">
                        <div className="container-fluid ">
                            <a className="navbar-brand text-white">Navigation</a>
                                <button className="btn btn-outline-success bg-secondary-subtle text-dark px-5" type="submit">Logout</button>
                        </div>
                    </nav>
                    <div className='bg-body-tertiary mx-3 rounded d-flex align-items-sm-center' style={{height:'300px'}}>
                        <h2 className=''>Private Views</h2>
                    </div>
                    <div className=' bg-primary  m-3 rounded py-2'>
                        <h1 className='text-white'>Footer</h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login_logout