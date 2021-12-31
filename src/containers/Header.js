import React from 'react';

const Header = () => {
    return ( 
    <nav className="navbar navbar-default navbar-light bg-dark navbar-dark fixed">
    <div className="container-fluid">
        <a className="navbar-brand">Fake Shop</a>
        <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
    </nav>
     );
}
 
export default Header;




{/* <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className='ui fixed menu'>
                    <div className='ui container center'>
                        <h2></h2>
                    </div>
                </div>
            </div>
        </nav> */}
