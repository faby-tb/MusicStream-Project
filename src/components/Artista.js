import React from 'react'

import { useParams } from 'react-router-dom';


const Artista = (props) => {
    function changeSong(e){
        console.log(e.nombre);
        document.getElementById('player').src = props.component.songs[0].song;
        document.getElementById('player').src = e.song;
        document.getElementById('audioPlayerSongTitle').innerText = e.nombre;
        
    }
    
    let { id } = useParams();
    
    let artist = props.component.artistas[id];
    let songs = props.component.songs;
    
    console.log(artist);
    
    let styleImg = {
        'background': 'url("'+artist.img+'")',
        'backgroundSize': 'cover',
        'backgroundPosition':'center'
    };

    return(
        <div className="artist col-11 mb-5 pb-5 px-0">
            <div className="artistCover d-flex flex-column align-items-end justify-content-end" style={styleImg}>
                    <h1 className="text-capitalize display-1 px-5 titulos">{artist.nombre}</h1>
                    <p className="px-5 genero">{artist.genero}</p>
                    <div className="gradient container-fluid py-4"></div>
            </div>
            <div className="container-fluid artistContentHeader">
                <h4 className="pt-4 titulos">Canciones</h4>
            </div>
            <div>
                {songs.length > 0 ? (songs.map((song) => {
                    return(
                        <button className={song.artistId === artist.id ? 'btn playerButton canciones mx-1' : 'none'}  onClick={() => changeSong(song.artistId === artist.id ? song : "")}>{song.artistId === artist.id ? song.nombre : ""}</button>
                        
                    )
                }) ) : (
                    <div></div>)
                }
            </div>
            <div className="container-fluid artistContentHeader">
                <h4 className="pt-4 titulos">Informacion General</h4>
            </div>
            <div className="container artistContent">
            <p>
                {artist.bio}
            </p>
            
            
            </div>
            <div className="col-1 my-auto">
            </div>
        </div>
    );
}

export default Artista;

