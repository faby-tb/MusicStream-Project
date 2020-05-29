import React from 'react'

import { useParams } from 'react-router-dom';

import artistImg from '../img/the-weeknd-blinding-lights.jpg';

const Artista = (props) => {

    let { id } = useParams();

    let artist = props.component[id];
    
    let styleImg = {
        'background': 'url("'+artistImg+'")',
        'backgroundSize': 'cover',
        'backgroundPosition':'center'
    }
    return(
        <div className="col-11 mb-5 pb-5 px-0">
            <div className="artistCover d-flex flex-column align-items-end justify-content-end" style={styleImg}>
                    <h1 className="text-capitalize display-1 px-5 titulos">{artist.nombre}</h1>
                    <p className="px-5 genero">{artist.genero}</p>
                    <div className="gradient container-fluid py-4"></div>
            </div>
            <div className="container-fluid artistContentHeader">
                <h4 className="pt-4 titulos">Informacion General</h4>
            </div>
            <div className="container artistContent">
                {artist.bio}
            </div>
        </div>
    );
}

export default Artista;