import React from 'react';

// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import axios from 'axios';

import NavIzquierdo from './NavIzquierdo';
import AudioPlayer from './AudioPlayer';
import Artista from './Artista';
import Home from './Home';
import Top from './Top';
import NotFound from './NotFound';

class App extends React.Component {

	requestSaludo = () =>{
		let url ='http://app.test/api/hola';
			
		axios
			.get(url)
			.then((res)=>{
				// console.log(res);
			})
			.catch((crasheo)=>{
				console.error(crasheo);
			});
	};
	state = {
		baseUrl:[
			{url:'http://app.test/'}
		],
		artistas: [],
		topThree: [],
		carousel:[],
		songs:[],
		banners:[]
	};

	requestArtistas = () =>{
		let url ='http://app.test/api/artist';
			
		axios
			.get(url)
			.then((res)=>{
				this.setState({
					artistas: res.data.reponse.artistas,
				});
			})
			.catch((crasheo)=>{
				console.error(crasheo);
			});
	};
	requestTopThree = () =>{
		let url ='http://app.test/api/topThree';
			
		axios
			.get(url)
			.then((res)=>{
				// console.log(res.data.reponse.artistas);
				this.setState({
					topThree: res.data.reponse.artistas,
				});
			})
			.catch((crasheo)=>{
				console.error(crasheo);
			});
	};
	requestCarousel = () =>{
		let url ='http://app.test/api/carousel';
			
		axios
			.get(url)
			.then((res)=>{
				let a = res.data.reponse.artistas;
				a.forEach(artist => {
					artist.photos.sort(() => Math.random() - 0.5);
				});
				this.setState({
					carousel: res.data.reponse.artistas,
				});
			})
			.catch((crasheo)=>{
				console.error(crasheo);
			});
	};
	
	requestBanners = () =>{
		let url ='http://app.test/api/topSix';
		let imagenes=[];
		axios
			.get(url)
			.then((res)=>{
				res.data.reponse.imagenes.sort(() => Math.random() - 0.5);
				res.data.reponse.imagenes.forEach(function(imagen){
					imagenes.push({img:'http://app.test/'+imagen.filename});
				});
				this.setState({
					banners: imagenes,
				});
			})
			.catch((crasheo)=>{
				console.error(crasheo);
			});
	};
	requestCanciones = () =>{
		let url ='http://app.test/api/songs';
		let canciones=[];
		axios
			.get(url)
			.then((res)=>{
				res.data.reponse.canciones.forEach(function(cancion){
					canciones.push({
						artistId:cancion.songable.id,
						song:'http://app.test/'+cancion.filename,
						nombre:cancion.name});
				});
				this.setState({
					songs: canciones,
				});
			})
			.catch((crasheo)=>{
				console.error(crasheo);
			});
	};

	componentDidMount = () => {
		this.requestBanners();
		this.requestArtistas();
		this.requestCanciones();
		this.requestCarousel();
		this.requestTopThree();
	};

	render() {
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
							<Route path="/top">
								<Top props={this.state}></Top>
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
