/*eslint-disable*/
import React from "react";
import { Container } from '@material-ui/core'

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
    <>
    
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/header.png") + ")",
          }}
         //  ref={pageHeader}
        ></div>
      </div>
    </>
  );
}

export default IndexHeader;
