import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import App from "./App"

import 'react-slideshow-image/dist/styles.css'
import "./scss/style.scss";


class Index extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
      
    )
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
