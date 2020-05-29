import React from 'react';

// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';

const NavIzquierdo = () => {
        return(
        <ul className="nav position-fixed flex-column text-white col-sm-1 p-0">
            <Link to="./../" className="text-decoration-none">
                <li  className="list-group-item">
                    <h4 className="logo text-center py-2 rounded-pill titulos"><i className="fas fa-music"></i>RMB</h4>
                </li>
            </Link>
            <li className="list-group-item p-0">
                <h6 className="pl-2 pt-2">Browse menu</h6>
                <Link className="nav-link text-decoration-none" to="./../"><i className="fas fa-home"></i> Home</Link>
            </li>
            <li className="list-group-item p-0">
                <a className="nav-link text-decoration-none disabled" href="."><i className="fas fa-chart-line"></i> Top Trending</a>
                <a className="nav-link text-decoration-none disabled" href="."><i className="fas fa-list-ul"></i> Playlist</a>
                <a className="nav-link text-decoration-none disabled" href="."><i className="fas fa-wave-square"></i> Radio</a>
            </li>
        </ul>
        );
};

export default NavIzquierdo;