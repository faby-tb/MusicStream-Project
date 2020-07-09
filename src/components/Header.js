import React,{useState} from 'react';
import ImgComp from './ImgComp';
const Slider = (props) => {
	
	let slideArr = props.props;
	
		
	// console.log(slideArr);
		const [x,setX] = useState(0);	
		
		let _style = { transform: 'translateX(' + x + '%)'};

		const goLeft=()=>{
			(x === 0) ? setX(-100*(slideArr.length-3)) : setX(x+100);
		};

		const goRight=()=>{
			(x === -100*(slideArr.length-3)) ? setX(0) : setX(x-100);
		};

        return(
			<div className="header-container mb-3">{
				slideArr.map((img,index)=>{
					return(
						<div key={index} className="header" style={_style}>
							<ImgComp src={img.img} />
						</div>
					);
				})}
				<button id="goLeftHeader"  onClick={goLeft}>
					<i className="fas fa-chevron-left"></i>
				</button>
				<button id="goRightHeader" onClick={goRight}>
					<i  className="fas fa-chevron-right"></i>
				</button>
			</div>
        );
};

export default Slider;