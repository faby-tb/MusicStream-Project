import React from 'react';


// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';

const Top = (props) => {

        let artistas = props.props.artistas;  
        let baseUrl = props.props.baseUrl[0].url;  

        let style={
            'height':'20vh',
            'width':'20vw',
            'objectFit':'cover'
        };
        return(
            <div className="content col-xl-11 mb-5 pb-5 px-0">
                

                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">MLD</h1>
                        <p className="lead">Top Trending</p>
                    </div>  
                </div>

                
                <div className="row col-11 ml-auto mr-0">
                    {artistas.map((artista,index)=>{
                        artista.photos.sort(() => Math.random() - 0.5);
                        return(
                        <div key={index} className="card mb-3 mx-4 embed-responsive embed-responsive-16by9 carousel-card">
                            <img src={baseUrl+artista.photos[0].filename} className="card-img-top embed-responsive-item" style={style} alt={artista.nombre}/>
                            <div className="card-body position-relative">
                                <h5 className="card-title">{artista.nombre}</h5>
                            </div>
                            <Link to={"/artista/"+artista.id} className="text-decoration-none stretched-link"><h4 className="card-title text-center clickable text-capitalize titulos"> </h4></Link>
                        </div>
                    );})}
                </div>   
            </div>
        );
};

export default Top;