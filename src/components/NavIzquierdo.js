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
                    <h4 className="logo text-center py-2 rounded-pill titulos"><i className="fas fa-music"></i> MLD</h4>
                </li>
            </Link>
            <li className="list-group-item p-0">
                <h6 className="pl-2 pt-2">Browse menu</h6>
                <Link className="nav-link text-decoration-none" to="./../">
                    <svg className="py-auto pr-1" width="18" height="18" viewBox="0 0 47 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M25.1179 0.617664C24.2005 -0.205888 22.7995 -0.205888 21.882 0.617664L0.787322 19.5541C-0.195603 20.4365 -0.268041 21.9386 0.625527 22.9092C1.5191 23.8798 3.04029 23.9513 4.02322 23.069L4.38334 22.7457V35.9105C4.38334 38.7214 6.69091 41 9.53745 41H37.4625C40.3091 41 42.6167 38.7214 42.6167 35.9105V22.7457L42.9768 23.069C43.9597 23.9513 45.4809 23.8798 46.3745 22.9092C47.268 21.9386 47.1956 20.4365 46.2127 19.5541L25.1179 0.617664ZM37.8125 18.433L23.5 5.58492L9.18754 18.433C9.19172 18.4903 9.19384 18.5481 9.19384 18.6064V35.9105C9.19384 36.0979 9.34768 36.2498 9.53745 36.2498H37.4625C37.6523 36.2498 37.8062 36.0979 37.8062 35.9105V18.6064C37.8062 18.5481 37.8083 18.4903 37.8125 18.433Z" fill="currentColor"/>
                    </svg>
                    Home
                </Link>
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