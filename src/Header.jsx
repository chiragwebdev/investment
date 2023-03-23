import React from 'react'
import { CgPhone } from 'react-icons/cg'

function Header() {
    return (
        <>
            <div className='container' id="top">
                <div className="row">
                    <div className="col d-flex align-items-center justify-content-between py-2">
                        <div className='logo'>LOGO</div>
                        <div className='d-flex align-items-center'>
                            <CgPhone className="callicon me-2" />
                            <div>
                                <p className='header-contact'>Quick Contact</p>
                                <p className='header-contact'>+91 84565 84165</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header