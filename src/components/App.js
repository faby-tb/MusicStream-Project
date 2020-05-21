import React from 'react';

import NavIzquierdo from './NavIzquierdo';
import AudioPlayer from './AudioPlayer';
import Content from './Content';

class App extends React.Component {
  state = {
		
  };
  render() {
    return (
		<div className="bg-dark text-white">
			<div className="d-flex justify-content-between">
				<NavIzquierdo></NavIzquierdo>
				<Content></Content>
			</div>
			<div className="d-flex bg-secondary fixed-bottom">
				<AudioPlayer></AudioPlayer>
			</div>
		</div>
    );
  }
}

export default App;
