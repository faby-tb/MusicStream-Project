import React from 'react';

import Slider from './Slider';
import Header from './Header';

// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';

const Home = (props) => {
        let artistas = props.props.topThree;
        let count=0;
        let baseUrl=props.props.baseUrl[0].url;

        
        return(
            <div className="content col-xl-11 mb-5 pb-5 px-0">
                <Header props={props.props.banners}></Header>

                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">MLD</h1>
                        <p className="lead">Proyecto de interactivas en proceso</p>
                    </div>  
                </div>

                <div className="carousel-cards row container-fluid justify-content-center">
                        {(artistas.length > 0) ? (artistas.map((artista,index) => {

                            // console.log(baseUrl+artista.photos[0].filename);
                            count++;

                            if(count>3){
                                return '';
                            }
                            artista.photos.sort(() => Math.random() - 0.5);

                            return (<div key={index} className="card mb-3 col-3 mx-4 pt-2 rounded-lg">{count < 4 ? <div key={artista.id}>
                            <Link to={{pathname:'/artista/'+artista.id}} >
                                <div className="card-img-limit"> 
                                    <img src={baseUrl+artista.photos[0].filename} className="card-img-top rounded-0 clickable" alt={artista.nombre}/>
                                </div>
                            </Link>
                            <div className="card-body position-relative">
                                <Link to={"/artista/"+artista.id} className="text-decoration-none stretched-link"><h4 className="card-title text-center clickable text-capitalize titulos">{artista.nombre}</h4></Link>
                                <p className="card-text text-center">{artista.descripcion}</p>
                                <p className="text-muted text-center">Clic para ver más</p>
                            </div>
                        </div> : ''}
                            
                            </div>)

                            ;
                        }) ) : (
                            <li className="list-group-item border-0"> No hay artistas</li>)
                        }
                </div>

                <Slider props={props.props.carousel}></Slider>

                <h3 className="text-center black">MLD Video</h3>
                <div className="container embed-responsive embed-responsive-16by9">
                    <iframe title="ExampleVideo" className="embed-responsive-item" src="https://www.youtube.com/embed/eyCiR141LFU"></iframe>
                </div>
            </div>
        );
};

export default Home;