import React from 'react';

const NotFound = () => {

    return(
        <div className="col-11 mt-3 mb-5 pb-5 not-found d-flex flex-column align-items-center justify-content-center">
            <h1 className="p-2"><i className="fas fa-times-circle"></i>  NotFound</h1>
            <h3 className="p-2">Volver al <a href="./" className="text-decoration-none">Home</a></h3>
        </div>
    );
}

export default NotFound;