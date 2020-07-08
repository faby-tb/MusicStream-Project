import React from 'react';

// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import axios from 'axios';

import NavIzquierdo from './NavIzquierdo';
import AudioPlayer from './AudioPlayer';
import Artista from './Artista';
import Home from './Home';
import NotFound from './NotFound';

import banner0 from '../img/indice.jpg';
import banner1 from '../img/the-weeknd-colorful-paintart-4k-l3.jpg';
import banner2 from '../img/2017-ariana-grande-broken-terror-attack-concert-63.jpg';
import banner3 from '../img/twenty-one-pilots-performing-5k-5r.jpg';
import banner4 from '../img/dua-lipa-2017-ua.jpg';
import banner5 from '../img/ariana-grande-vogue-uk-4l.jpg';
import banner6 from '../img/2.jpg';

import img0 from '../img/the-weeknd-blinding-lights.jpg';
import img1 from '../img/indice.jpg';
import img2 from '../img/ariana-grande-2018-4k-5k-9f.jpg';

import mini0 from '../img/the-weeknd.jpg';
import mini1 from '../img/wallpaperflare.com_wallpaper.jpg';
import mini2 from '../img/ariana-grande-2018-4k-5k-9f.jpg';

import song0 from '../music/The Weeknd - Blinding Lights.mp3';
import song1 from '../music/The Weeknd - Heartless.mp3';
import song2 from '../music/The Weeknd - In Your Eyes.mp3';
import song3 from '../music/The Weeknd - After Hours.mp3';
import song4 from '../music/The Weeknd - Starboy.mp3';

import song5 from '../music/Twenty One Pilots - Level Of Concern.mp3';
import song6 from '../music/Twenty One Pilots - Stressed Out.mp3';
import song7 from '../music/Twenty One Pilots - Ride.mp3';
import song8 from '../music/Twenty One Pilots - Chlorine.mp3';
import song9 from '../music/Twenty One Pilots - The Hype.mp3';

import song10 from '../music/Ariana Grande - Stuck with U (with Justin Bieber).mp3';
import song11 from '../music/Ariana Grande - Rain On Me.mp3';
import song12 from '../music/Ariana Grande - 7 rings.mp3';
import song13 from '../music/Ariana Grande - thank u, next.mp3';
import song14 from '../music/Ariana Grande - Good As Hell (Remix).mp3';

class App extends React.Component {

	requestSaludo = () =>{
		let url ='http://app.test/api/hola';
			
		axios
			.get(url)
			.then((res)=>{
				console.log(res);
			})
			.catch((crasheo)=>{
				console.error(crasheo);
			});
	};
	state = {
		artistas: [
			{nombre:"the weeknd",
			id:"0",
			img: img0,
			mini: mini0,
			genero:"R&B Alternativo",
			descripcion:"Blinding Lights, Starboy, False Alarm, After Hours y más.",
			bio:"Abel Makkonen Tesfaye (born February 16, 1990), known professionally as The Weeknd, is a Canadian singer, songwriter, and record producer. He began his recording career in 2010, anonymously uploading several songs to YouTube. A year later, The Weeknd released the mixtapes House of Balloons, Thursday, and Echoes of Silence, and quickly earned a following and critical recognition from several mainstream publications due to his dark style of R&B and the mystique surrounding his identity."},
			{nombre:"Twenty One Pilots",
			id:"1",
			img: img1,
			mini: mini1,
			genero:"Pop Rock",
			descripcion:"Level Of Concern, Stressed Out, Ride, Chlorine y más.",
			bio:"Twenty One Pilots es un dúo musical estadounidense de Columbus, Ohio. La banda se formó en 2009 por el vocalista Tyler Joseph junto con Nick Thomas y Chris Salih, quienes se fueron en 2011. Desde su partida, la formación ha consistido en Joseph y el baterista Josh Dun."},
			{nombre:"Ariana Grande",
			id:"2",
			img: img2,
			mini: mini2,
			genero:"R&B",
			descripcion:"Ariana Grande - 7 rings, thank u, next, Rain On Me, Stuck with U y más.​",
			bio:"Ariana Grande Butera ​ es una cantautora, actriz, productora musical y diseñadora de modas estadounidense.​ Nacida en Florida, comenzó su carrera en 2008 en el musical Trece de Broadway, antes de interpretar el papel de Cat Valentine en la serie de televisión Victorious de Nickelodeon y en la secuela, Sam & Cat."},
			],
		songs:[
			{artistId:"0",
			song: song0,
			nombre: "Blinding Lights"},
			{artistId:"0",
			song: song1,
			nombre: "Heartless"},
			{artistId:"0",
			song: song2,
			nombre: "In Your Eyes"},
			{artistId:"0",
			song: song3,
			nombre: "After Hours"},
			{artistId:"0",
			song: song4,
			nombre: "Starboy"},
			{artistId:"1",
			song: song5,
			nombre: "Level Of Concern"},
			{artistId:"1",
			song: song6,
			nombre: "Stressed Out"},
			{artistId:"1",
			song: song7,
			nombre: "Ride"},
			{artistId:"1",
			song: song8,
			nombre: "Chlorine"},
			{artistId:"1",
			song: song9,
			nombre: "The Hype"},
			{artistId:"2",
			song: song10,
			nombre: "Stuck with U"},
			{artistId:"2",
			song: song11,
			nombre: "Rain On Me"},
			{artistId:"2",
			song: song12,
			nombre: "7 rings"},
			{artistId:"2",
			song: song13,
			nombre: "thank u, next"},
			{artistId:"2",
			song: song14,
			nombre: "Good as Hell"},
			],
			banners:[
			{img: banner0},
			{img: banner1},
			{img: banner2},
			{img: banner3},
			{img: banner4},
			{img: banner5},
			{img: banner6},
			]
	};


	render() {
		this.requestSaludo();
		return (
			<Router>
				<div className="text-white main">
					<div className="d-flex justify-content-between">
						<NavIzquierdo></NavIzquierdo>
						<div id="navSpace" className="col-sm-1"></div>
						<Switch>
							<Route exact path="/">
								<Home props={this.state}></Home>
							</Route>
							<Route path="/artista/:id">
								<Artista component={this.state}></Artista>
							</Route>
							<Route path="*">
								<NotFound/>
							</Route>
						</Switch>
					</div>
					<div className="d-flex fixed-bottom">
						<AudioPlayer></AudioPlayer>
					</div>
				</div>
			</Router>
		);
  	}
}

export default App;
