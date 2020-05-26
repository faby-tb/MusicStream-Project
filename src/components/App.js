import React from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavIzquierdo from './NavIzquierdo';
import AudioPlayer from './AudioPlayer';
import Artista from './Artista';
import Home from './Home';
import NotFound from './NotFound';

class App extends React.Component {
  state = {
		
  };
  render() {
    return (
		<Router>
			<div className="bg-dark text-white">
				<div className="d-flex justify-content-between">
					<NavIzquierdo></NavIzquierdo>
					<div id="navSpace" className="col-1"></div>
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route exact path="/artista">
							<Artista></Artista>
						</Route>
						<Route path="*">
							<NotFound/>
						</Route>
					</Switch>
				</div>
				<div className="d-flex bg-secondary fixed-bottom">
					<AudioPlayer></AudioPlayer>
				</div>
			</div>
		</Router>
    );
  }
}

export default App;
