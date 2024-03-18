import React from 'react'

function Header() {
    return (
        <div>
            <nav className='nav'>
                <div className='nav-left'>
                    <a className='brand' href='#'>
                        Group 7
                    </a>
                </div>
                <div className='nav-right'>
                   <div className='tabs'>
                    <a> Task Manager App </a>
                   </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;