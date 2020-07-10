import React from 'react';

import song from '../music/The Weeknd - Starboy.mp3';


class AudioPlayer extends React.Component {
    handleChangeSong = (e) =>{
        // console.log(e);
        document.getElementById('audioPlayerSong').src= song;
    }

    handlePlay = (e) => {
        let progress = document.getElementById('progress');

        progress.addEventListener('click', function(e) {
            var clickPosition = (e.pageX  - this.offsetLeft) / this.offsetWidth;
            var clickTime = clickPosition * document.getElementById('player').duration;
            document.getElementById('player').currentTime = clickTime;
        });

        document.getElementById('player').addEventListener('timeupdate', function() {
            document.getElementById('bar').style.width = parseInt(((document.getElementById('player').currentTime / document.getElementById('player').duration) * 100), 10) + "%";
        });

        if (document.getElementById('player').paused === true) {
            document.getElementById('player').play();
            document.getElementById('playButton').innerHTML = '<svg width="14" height="16" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 2C0 0.895431 0.895431 0 2 0H11.3333C12.4379 0 13.3333 0.895431 13.3333 2V38C13.3333 39.1046 12.4379 40 11.3333 40H2C0.895429 40 0 39.1046 0 38V2Z" fill="currentColor"/><path d="M20 2C20 0.895431 20.8954 0 22 0H31.3333C32.4379 0 33.3333 0.895431 33.3333 2V38C33.3333 39.1046 32.4379 40 31.3333 40H22C20.8954 40 20 39.1046 20 38V2Z" fill="currentColor"/> </svg>';
            document.getElementById('audioPlayerSong').innerHTML = " False Alarm - The Weeknd ";
            
          } else {
            document.getElementById('player').pause();
            document.getElementById('playButton').innerHTML = '<svg width="14" height="16" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 14.2679C28.3333 15.0377 28.3333 16.9622 27 17.732L3 31.5884C1.66667 32.3582 -6.72981e-08 31.396 0 29.8564L1.21137e-06 2.14358C1.27866e-06 0.603978 1.66667 -0.358273 3 0.411527L27 14.2679Z" fill="currentColor"/></svg>';
          }
    };
    handleVolumeUp = (e) => {
        if(document.getElementById('player').volume < 1){
            document.getElementById('player').volume+=0.1;
        }
    };
    handleVolumeDown = (e) => {
        if(document.getElementById('player').volume > 0.1){
            document.getElementById('player').volume-=0.1;
        }
    };
    handlePreviousSong = (e) => {
        
    };
    handleNextSong = (e) => {
        
    };

    render = () =>{
        return(
            <div className="audioPlayer container text-white col-12  text-center row mx-0 px-0">
                <audio id="player">
                    <source id="audioPlayerSong" src={song} autoPlay />
                    Your browser does not support the audio element.
                </audio>
                    <div className="col-1 my-auto row justify-content-center controls">
                        <button className="btn playerButton px-auto" id="previousButton" onClick={this.handlePreviousSong}>
                        <svg width="14" height="16" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.8837 16.8583C13.6434 16.1422 13.6434 14.352 14.8837 13.6359L37.2093 0.74618C38.4496 0.0300864 40 0.925204 40 2.35739V28.1367C40 29.5689 38.4496 30.4641 37.2093 29.748L14.8837 16.8583Z" fill="currentColor"/>
                            <path d="M0.930239 13.6358C-0.31008 14.3519 -0.31008 16.1422 0.930239 16.8583L23.2558 29.748C24.4961 30.464 26.0465 29.5689 26.0465 28.1367V26.417C26.0465 26.1195 25.839 25.8686 25.5814 25.7199L10.2326 16.8583C8.99224 16.1422 8.99224 14.3519 10.2326 13.6358L25.5814 4.77419C25.839 4.62547 26.0465 4.37457 26.0465 4.07713V2.35737C26.0465 0.925204 24.4961 0.0300885 23.2558 0.746158L0.930239 13.6358Z" fill="currentColor"/>
                        </svg>
                        </button>
                        <button className="btn playerButton px-auto" id="playButton" onClick={this.handlePlay}>
                            <svg width="14" height="16" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27 14.2679C28.3333 15.0377 28.3333 16.9622 27 17.732L3 31.5884C1.66667 32.3582 -6.72981e-08 31.396 0 29.8564L1.21137e-06 2.14358C1.27866e-06 0.603978 1.66667 -0.358273 3 0.411527L27 14.2679Z" fill="currentColor"/>
                            </svg>
                        </button>
                        <button className="btn playerButton px-auto" id="nextButton" onClick={this.handleNextSong}>
                            <svg width="14" height="16" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.1163 13.1417C26.3566 13.8578 26.3566 15.648 25.1163 16.3641L2.7907 29.2538C1.55039 29.9699 -6.26029e-08 29.0748 0 27.6426L1.12685e-06 1.86324C1.18945e-06 0.431055 1.55039 -0.464063 2.7907 0.252031L25.1163 13.1417Z" fill="currentColor"/>
                                <path d="M39.0698 16.3641C40.3101 15.648 40.3101 13.8578 39.0698 13.1417L16.7442 0.252032C15.5039 -0.464038 13.9535 0.431078 13.9535 1.86325V3.583C13.9535 3.88044 14.161 4.13134 14.4186 4.28007L29.7674 13.1417C31.0078 13.8578 31.0078 15.648 29.7674 16.3641L14.4186 25.2258C14.161 25.3745 13.9535 25.6254 13.9535 25.9229V27.6426C13.9535 29.0748 15.5039 29.9699 16.7442 29.2538L39.0698 16.3641Z" fill="currentColor"/>
                            </svg>                      
                        </button>
                    </div>
                    <div id="progress" className="col-8">
                        <div id="bg-bar"></div>
                        <div id="bar"></div>
                    </div>
                    <h6 id="audioPlayerSongTitle" className="col-2 my-auto"> </h6>
                    <div className="col-1 my-auto volume-controls">
                        <button className="btn playerButton" onClick={this.handleVolumeDown}><i className="fas fa-volume-down"></i></button>
                        <button className="btn playerButton" onClick={this.handleVolumeUp}><i className="fas fa-volume-up"></i></button>
                    </div>

            </div>
        );
    }
};

export default AudioPlayer;