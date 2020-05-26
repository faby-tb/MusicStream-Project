import React from 'react';
import Slider from './Slider';
import Header from './Header';
import img from '../img/placeholder_600x400.svg';
import TheWeeknd from '../img/the-weeknd.jpg';

const Content = () => {
        return(
            <div className="col-11 mt-3 mb-5 pb-5">
                <Header></Header>

                <div className="jumbotron jumbotron-fluid bg-info">
                    <div className="container">
                        <h1 className="display-4">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>  
                </div>

                <div className="row container-fluid justify-content-center">
                    <div className="card mb-3 bg-dark col-3 mx-4">
                    <a href="/artista" className="text-decoration-none"><img src={TheWeeknd} className="card-img-top" alt="TheWeeknd"/></a>
                            <div className="card-body position-relative">
                                <a href="/artista" className="text-decoration-none"><h4 className="card-title text-center">The Weeknd</h4></a>
                                <p className="card-text">Con algunos de sus éxitos como Blinding Lights, Call Out My Name, Starboy, The Hills, Can't Feel My Face y I Feel It Coming.​</p>
                            </div>
                    </div>
                    <div className="card mb-3 bg-dark col-3 mx-4">
                    <a href="/artista" className="text-decoration-none"><img src={TheWeeknd} className="card-img-top" alt="TheWeeknd"/></a>
                            <div className="card-body position-relative">
                                <a href="/artista" className="text-decoration-none"><h4 className="card-title text-center">The Weeknd</h4></a>
                                <p className="card-text">Con algunos de sus éxitos como Blinding Lights, Call Out My Name, Starboy, The Hills, Can't Feel My Face y I Feel It Coming.​</p>
                            </div>
                    </div>
                    <div className="card mb-3 bg-dark col-3 mx-4">
                    <a href="/artista" className="text-decoration-none"><img src={TheWeeknd} className="card-img-top" alt="TheWeeknd"/></a>
                            <div className="card-body position-relative">
                                <a href="/artista" className="text-decoration-none"><h4 className="card-title text-center">The Weeknd</h4></a>
                                <p className="card-text">Con algunos de sus éxitos como Blinding Lights, Call Out My Name, Starboy, The Hills, Can't Feel My Face y I Feel It Coming.​</p>
                            </div>
                    </div>
                </div>

                <Slider></Slider>

                <h3 className="text-center">Example Video</h3>
                <div class="container embed-responsive embed-responsive-16by9">
                    <iframe title="ExampleVideo" class="embed-responsive-item" src="https://www.youtube.com/embed/CW5oGRx9CLM"></iframe>
                </div>
            </div>
        );
};

export default Content;