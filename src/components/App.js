import React from 'react';

// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import NavIzquierdo from './NavIzquierdo';
import AudioPlayer from './AudioPlayer';
import Artista from './Artista';
import Home from './Home';
import NotFound from './NotFound';

class App extends React.Component {
	state = {
		artistas: [
			{nombre:"the weeknd",
			id:"0",
			genero:"R&B Alternativo",
			descripcion:"Con algunos de sus éxitos como Blinding Lights, Call Out My Name, Starboy, The Hills, Can't Feel My Face y I Feel It Coming.​",
			bio:"Abel Makkonen Tesfaye (born February 16, 1990), known professionally as The Weeknd, is a Canadian singer, songwriter, and record producer. He began his recording career in 2010, anonymously uploading several songs to YouTube. A year later, The Weeknd released the mixtapes House of Balloons, Thursday, and Echoes of Silence, and quickly earned a following and critical recognition from several mainstream publications due to his dark style of R&B and the mystique surrounding his identity."},
			{nombre:"the weeknd2",
			id:"1",
			genero:"R&B Alternativo",
			descripcion:"Con algunos de sus éxitos como Blinding Lights, Call Out My Name, Starboy, The Hills, Can't Feel My Face y I Feel It Coming.​",
			bio:"Abel Makkonen Tesfaye (born February 16, 1990), known professionally as The Weeknd, is a Canadian singer, songwriter, and record producer. He began his recording career in 2010, anonymously uploading several songs to YouTube. A year later, The Weeknd released the mixtapes House of Balloons, Thursday, and Echoes of Silence, and quickly earned a following and critical recognition from several mainstream publications due to his dark style of R&B and the mystique surrounding his identity."},
			{nombre:"the weeknd3",
			id:"2",
			genero:"R&B Alternativo",
			descripcion:"Con algunos de sus éxitos como Blinding Lights, Call Out My Name, Starboy, The Hills, Can't Feel My Face y I Feel It Coming.​",
			bio:"Abel Makkonen Tesfaye (born February 16, 1990), known professionally as The Weeknd, is a Canadian singer, songwriter, and record producer. He began his recording career in 2010, anonymously uploading several songs to YouTube. A year later, The Weeknd released the mixtapes House of Balloons, Thursday, and Echoes of Silence, and quickly earned a following and critical recognition from several mainstream publications due to his dark style of R&B and the mystique surrounding his identity."},
			]
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
								<Home props={this.state.artistas}></Home>
							</Route>
							<Route exact path="/artista/:id">
								<Artista component={this.state.artistas}></Artista>
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
