/*eslint-disable*/
import React from "react";
import { Container} from '@material-ui/core'

import './Header.css'



// reactstrap components
// import { Container } from "reactstrap";
// core components

function IndexHeader() {
	
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
			 	<div className="container header-text">
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
