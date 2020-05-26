import React from 'react';

const NavIzquierdo = () => {
        return(
        <ul className="nav position-fixed flex-column text-white bg-dark col-1 p-0">
            <a href="./" className="text-decoration-none">
                <li  className="list-group-item bg-dark">
                    <h4 className="logo text-center py-2 rounded-pill"><i className="fas fa-music"></i>RMB</h4>
                </li>
            </a>
            <li className="list-group-item bg-dark">
                <a className="nav-link" href=".">Link</a>
                <a className="nav-link" href=".">Link</a>
                <a className="nav-link" href=".">Link</a>
            </li>
            <li className="list-group-item bg-dark">
                <a className="nav-link" href=".">Link</a>
                <a className="nav-link" href=".">Link</a>
                <a className="nav-link" href=".">Link</a>
            </li>
            <li className="list-group-item bg-dark">
                <a className="nav-link" href=".">Link</a>
                <a className="nav-link" href=".">Link</a>
                <a className="nav-link" href=".">Link</a>
            </li>
        </ul>
        );
};

export default NavIzquierdo;