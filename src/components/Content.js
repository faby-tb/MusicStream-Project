import React from 'react';
import img from '../img/placeholder_600x400.svg';

const Content = () => {
        return(
            <div className="justify-content-end col-11 mt-3 mb-5 pb-5">
                <h1>Hi</h1>

                <div className="jumbotron jumbotron-fluid bg-danger">
                    <div className="container">
                        <h1 className="display-4">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>  
                </div>

                <div className="row container-fluid justify-content-center">
                    <div className="card mb-3 bg-dark col-3 mx-4">
                        <img src={img} className="card-img-top" alt="..."/>
                            <div className="card-body position-relative">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                    </div>
                    <div className="card mb-3 bg-dark col-3 mx-4">
                        <img src={img} className="card-img-top" alt="..."/>
                            <div className="card-body position-relative">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                    </div>
                    <div className="card mb-3 bg-dark col-3 mx-4">
                        <img src={img} className="card-img-top" alt="..."/>
                            <div className="card-body position-relative">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                    </div>
                    {/* segunda fila */}
                    <div className="card mb-3 bg-dark col-3 mx-4">
                        <img src={img} className="card-img-top" alt="..."/>
                            <div className="card-body position-relative">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                    </div>
                    <div className="card mb-3 bg-dark col-3 mx-4">
                        <img src={img} className="card-img-top" alt="..."/>
                            <div className="card-body position-relative">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                    </div>
                    <div className="card mb-3 bg-dark col-3 mx-4">
                        <img src={img} className="card-img-top" alt="..."/>
                            <div className="card-body position-relative">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                    </div>
                </div>
            </div>
        );
};

export default Content;