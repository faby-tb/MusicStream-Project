import React,{useState} from 'react';
import img from '../img/placeholder_600x400.svg';

const Slider = () => {

        //test array DELETE
		let slideArr = [
			<div className="card mb-3 bg-success mx-4">
				<img src={img} className="card-img-top" alt="..."/>
				<div className="card-body position-relative">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
				</div>
			</div>,
			<div className="card mb-3 bg-success mx-4">
				<img src={img} className="card-img-top" alt="..."/>
				<div className="card-body position-relative">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
				</div>
			</div>,
			<div className="card mb-3 bg-success mx-4">
				<img src={img} className="card-img-top" alt="..."/>
				<div className="card-body position-relative">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
				</div>
			</div>,
			<div className="card mb-3 bg-success mx-4">
				<img src={img} className="card-img-top" alt="..."/>
				<div className="card-body position-relative">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
				</div>
			</div>,
			<div className="card mb-3 bg-success mx-4">
				<img src={img} className="card-img-top" alt="..."/>
				<div className="card-body position-relative">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
				</div>
			</div>

		];

		const [x,setX] = useState(0);	
		
		let _style = { transform: 'translateX(' + x + '%)'};

		const goLeft=()=>{
			(x === 0) ? setX(-101*(slideArr.length-3)) : setX(x+101);
		};

		const goRight=()=>{
			(x === -101*(slideArr.length-3)) ? setX(0) : setX(x-101);
		};

        return(
			<div className="slider">{
				slideArr.map((item,index)=>{
					return(
						<div key={index} className="slide" style={_style}>
							{item}
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