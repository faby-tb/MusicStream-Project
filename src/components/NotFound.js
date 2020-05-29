import React from 'react';

// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';

const NotFound = () => {

    return(
        <div className="col-11 mb-5 pb-5 not-found d-flex flex-column align-items-center justify-content-center">
            <h1 className="p-2 titulos"><i className="fas fa-times-circle highlight"></i>  NotFound</h1>
            <h3 className="p-2 titulos">Volver al <Link to="./../" className="text-decoration-none highlight">Home</Link></h3>
        </div>
    );
}

export default NotFound;