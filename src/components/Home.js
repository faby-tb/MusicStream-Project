import React from 'react';

import Slider from './Slider';
import Header from './Header';

// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';

const Home = (props) => {
        let artistas = props.props;
        console.log(artistas);
        let count=0;
    
        return(
            <div className="content col-xl-11 mb-5 pb-5 px-0">
                <Header></Header>

                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>  
                </div>

                <div className="carousel-cards row container-fluid justify-content-center">
                        {(artistas.length > 0) ? (artistas.map((artista) => {
                            count++;
                            return (<div className="card mb-3 col-3 mx-4 pt-2 rounded-lg">{count < 4 ? <div key={artista.id}>
                            <Link to={{pathname:'/artista/'+artista.id}} >
                                <div className="card-img-limit"> 
                                    <img src={artista.mini} className="card-img-top rounded-0 clickable" alt="TheWeeknd"/>
                                </div>
                            </Link>
                            <div className="card-body position-relative">
                                <Link to={"/artista/"+artista.id} className="text-decoration-none stretched-link"><h4 className="card-title text-center clickable text-capitalize titulos">{artista.nombre}</h4></Link>
                                <p className="card-text">{artista.descripcion}</p>
                            </div>
                        </div> : ''}
                            
                            </div>)

                            ;
                        }) ) : (
                            <li className="list-group-item border-0"> No hay artistas</li>)
                        }
                    
                </div>

                <Slider></Slider>

                <h3 className="text-center">Example Video</h3>
                <div className="container embed-responsive embed-responsive-16by9">
                    <iframe title="ExampleVideo" className="embed-responsive-item" src="https://www.youtube.com/embed/CW5oGRx9CLM"></iframe>
                </div>
            </div>
        );
};

export default Home;