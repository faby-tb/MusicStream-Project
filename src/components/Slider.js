import React,{useState} from 'react';

// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';

const Slider = (props) => {
	let cards = props.props;
	// console.log(cards);
		
		const [x,setX] = useState(0);	
		
		let _style = {	transform: 'translateX(' + x + '%)',
						transition: '0.2s'};

		const goLeft=()=>{
			(x === 0) ? setX(-110*(cards.length-4)) : setX(x+110);
		};

		const goRight=()=>{
			(x === -110*(cards.length-4)) ? setX(0) : setX(x-110);
		};
		let style = {
			'objectFit':'cover'
		};
		
        return(
			<div className="slider">{
				cards.map((card,index)=>{
					
					return(
						<div key={index} className="card mb-3 mx-4 embed-responsive embed-responsive-16by9 carousel-card" style={_style}>
							<img src={"http://app.test/"+card.photos[0].filename} className="card-img-top embed-responsive-item" style={style} alt="..."/>
							<div className="card-body position-relative">
								<h5 className="card-title white">{card.nombre}</h5>
								<p className="card-text white">{card.descripcion}</p>
								<p className="card-text"><small className="text-muted">Clic para ver más</small></p>
							</div>
								<Link to={"/artista/"+card.id} className="text-decoration-none stretched-link"><h4 className="card-title text-center clickable text-capitalize titulos"> </h4></Link>
						</div>
					);
				})}
				<button id="goLeft"  onClick={goLeft}>
					<div className="slider-arrow">
						<i className="fas fa-chevron-left"></i>
					</div>
				</button>
				<button id="goRight" onClick={goRight}>
					<div className="slider-arrow">
						<i className="fas fa-chevron-right"></i>
					</div>
				</button>
			</div>
        );
};

export default Slider;