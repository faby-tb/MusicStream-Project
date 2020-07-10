import React from 'react'

import { useParams } from 'react-router-dom';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';

const Artista = (props) => {
    function changeSong(e){
        document.getElementById('player').src = props.component.songs[0].song;
        document.getElementById('player').src = e.song;
        document.getElementById('audioPlayerSongTitle').innerText = e.nombre;
        
    }
    
    let { id } = useParams();
    let artist;
    let baseUrl=props.component.baseUrl[0].url;
    let artistas = props.component.artistas;
    
    function encontrarArtista(){ 
        artistas.forEach(function(artista){
            if(artista.id+"" === id+""){
                artist = artista;
            }
        });
    }
    let songs = props.component.songs;
    encontrarArtista();
    artist.photos.sort(() => Math.random() - 0.5);
    
    
    let styleImg = {
        'background': 'url("'+baseUrl+artist.photos[0].filename+'")',
        'backgroundSize': 'cover',
        'backgroundPosition':'center'
    };

    return(
        <div className="artist col-11 mb-5 pb-5 px-0">
            <Link to="./../" className="artistBack">
                <i className="fas fa-arrow-circle-left"></i>
            </Link>
            <div className="artistCover d-flex flex-column align-items-end justify-content-end" style={styleImg}>
                    <h1 className="text-capitalize display-1 px-5 titulos">{artist.nombre}</h1>
                    <p className="px-5 genero">{artist.genero}</p>
                    <div className="gradient container-fluid py-4"></div>
            </div>
            
            <div className="container-fluid artistContentHeader">
                <h4 className="pt-4 titulos">Informacion General</h4>
            </div>
            <div className="container artistContent">
            <p>
                {artist.descripcion}
            </p>
            
            </div>
            <div className="container-fluid artistContentHeader">
                <h4 className="pt-4 titulos">Canciones</h4>
            </div>
            <div className="half-page">
                <ul class="list-group list-group-flush">
                {songs.length > 0 ? (songs.map((song,index) => {
                    console.log(song.artistId);
                    console.log(artist.id);
                    return(
                        <li class="list-group-item bg-transparent">
                            <button key={index} className={song.artistId+"" === artist.id+"" ? 'btn playerButton canciones mx-1' : 'none'}  onClick={() => changeSong(song.artistId+"" === artist.id+"" ? song : "")}>{song.artistId+"" === artist.id+"" ? song.nombre : ""}</button>
                        </li>
                    )
                }) ) : (
                    <div></div>)
                }
                </ul>
            </div>
            <div className="col-1 my-auto">
            </div>
        </div>
    );
}

export default Artista;

