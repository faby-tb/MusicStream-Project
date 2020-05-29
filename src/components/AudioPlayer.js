import React from 'react';

import song from '../music/The Weeknd - False Alarm (Audio).mp3';

class AudioPlayer extends React.Component {

    
    
    handlePlay = (e) => {
        let progress = document.getElementById('progress');

        progress.addEventListener('click', function(e) {
      
            // calculate the normalized position clicked
            var clickPosition = (e.pageX  - this.offsetLeft) / this.offsetWidth;
            var clickTime = clickPosition * document.getElementById('player').duration;
          
            // move the playhead to the correct position
            document.getElementById('player').currentTime = clickTime;
        });
        // document.getElementById('player').play();

        document.getElementById('player').addEventListener('timeupdate', function() {
            //sets the percentage
            document.getElementById('bar').style.width = parseInt(((document.getElementById('player').currentTime / document.getElementById('player').duration) * 100), 10) + "%";
        });

        if (document.getElementById('player').paused === true) {
            document.getElementById('player').play();
            document.getElementById('playButton').innerHTML = "<i class='fas fa-pause'></i>";
            document.getElementById('audioPlayerSong').innerHTML = " False Alarm - The Weeknd ";
            
          } else {
            document.getElementById('player').pause();
            document.getElementById('playButton').innerHTML = "<i class='fas fa-play'></i>";
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
            <div className="audioPlayer container text-white col-12  text-center row mx-0">
                <audio id="player">
                    <source src={song} autoPlay />
                    Your browser does not support the audio element.
                </audio>
                    <div className="col-1 my-auto row justify-content-center">
                        <button className="btn playerButton" id="previousButton" onClick={this.handlePreviousSong}><i className="fas fa-backward"></i></button>
                        <button className="btn playerButton" id="playButton" onClick={this.handlePlay}><i className="fas fa-play"></i></button>
                        <button className="btn playerButton" id="nextButton" onClick={this.handleNextSong}><i className="fas fa-forward"></i></button>
                    </div>
                    <div id="progress" className="pt-4 col-8">
                        <div id="bg-bar"></div>
                        <div id="bar"></div>
                    </div>
                    <h6 id="audioPlayerSong" className="col-2 my-auto"> </h6>
                    <div className="col-1 my-auto ">
                        <button className="btn playerButton" onClick={this.handleVolumeDown}><i className="fas fa-volume-down"></i></button>
                        <button className="btn playerButton" onClick={this.handleVolumeUp}><i className="fas fa-volume-up"></i></button>
                    </div>

            </div>
        );
    }
};

export default AudioPlayer;