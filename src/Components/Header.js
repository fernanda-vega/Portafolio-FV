/*eslint-disable*/
import React from "react";
import Container from 'react-bootstrap/Container'

import './Header.css'



// reactstrap components
// import { Container } from "reactstrap";
// core components

function IndexHeader() {
	

	// function moveText (){
	// 	const range = 40;
	// 	const text = document.querySelector(".header-text")
	// 	// const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
	// 	const calcValue = (a, b) => (a/b*range-range/2).toFixed(1)
	
	// 	let timeout;
	// 	document.addEventListener('mousemove', ({x, y}) => {
	// 	if (timeout) {
	// 		window.cancelAnimationFrame(timeout);
	// 	}
			
	// 	timeout = window.requestAnimationFrame(() => {
	// 	 const yValue = calcValue(y, window.innerHeight);
	// 	 const xValue = calcValue(x, window.innerWidth);
	
	// 	 text.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
	// 	})
	// }, false);
	
	// }
	
//   let pageHeader = React.createRef();

//   React.useEffect(() => {
//     if (window.innerWidth > 991) {
//       const updateScroll = () => {
//         let windowScrollTop = window.pageYOffset / 3;
//         pageHeader.current.style.transform =
//           "translate3d(0," + windowScrollTop + "px,0)";
//       };
//       window.addEventListener("scroll", updateScroll);
//       return function cleanup() {
//         window.removeEventListener("scroll", updateScroll);
//       };
//     }
//   });

  return (
		<div className="page-header clear-filter">
		  	<div
			className="page-header-image"
			style={{ backgroundImage: "url(" + require("../assets/img/header.png") + ")",}}>
			</div>
		  	<Container>
			 	<div className="content header-text">
					<h1 className="yellow-text">Design &</h1>
					<h1 className="outline-title outline-text">Front-End Dev</h1>
					<div className="btn slide-btn">
						<a href="#">
							<div className="lines"> 
								<span></span>
								<span></span> 
							</div>
							<svg  x="0px" y="0px" viewBox="0 0 104 104" enableBackground="new 0 0 104 104" xmlSpace="preserve">
								<circle className="play-circle" fill="none" stroke="#fff" strokeWidth="2" strokeMiterlimit="1" cx="52" cy="52" r="50"/>
							</svg>
							<b>Conóceme</b>
						</a>
				  	</div>
			 	</div>
		  	</Container>
		</div>
  );
}

export default IndexHeader;
