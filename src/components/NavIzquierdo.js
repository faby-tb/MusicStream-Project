import React from 'react';

// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';

class NavIzquierdo extends React.Component {

    componentDidMount =()=> {
        let darkMode = localStorage.getItem('darkMode'); 

        const darkModeToggle = document.querySelector('#dark-mode-toggle');

        const enableDarkMode = () => {
            document.querySelector(".main").dataset.mode= 'darkmode';
            document.querySelector('#dark-mode-toggle').innerHTML= '<p><i class="fas fa-moon"></i> Darkmode</p>';
            localStorage.setItem('darkMode', 'enabled');
        }

        const disableDarkMode = () => {
            document.querySelector(".main").dataset.mode='';
            document.querySelector('#dark-mode-toggle').innerHTML= '<p><i class="fas fa-sun"></i> Lightmode</p>';
            localStorage.setItem('darkMode', null);
        }
        
        if (darkMode === 'enabled') {
            enableDarkMode();
        }else{
            disableDarkMode();
        }

        darkModeToggle.addEventListener('click', () => {
        darkMode = localStorage.getItem('darkMode'); 
        
        if (darkMode !== 'enabled') {
            enableDarkMode();
        } else {  
            disableDarkMode(); 
        }
        });
    }

render = () => {
        return(
        <ul className="nav position-fixed flex-column text-white col-sm-1 col-md-0 p-0">
            <Link to="./../" className="text-decoration-none">
                <li  className="list-group-item">
                    <h4 className="logo text-center py-2 rounded-pill titulos"><i className="fas fa-music"></i> RMB</h4>
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
            <li className="list-group-item p-0 mt-auto mb-5">
                <button id="dark-mode-toggle" className="btn nav-link dark-mode-toggle ">
                    <p><i className="fas fa-moon"></i> Darkmode</p>
                </button>
            </li>
        </ul>
        );
    }
};

export default NavIzquierdo;