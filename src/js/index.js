//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


function SimpleCounter(props){
    return (<div classNmae= "bigCounter">
                <div className="seconds"></div>
                <div className="calendar"><i class="far fa-clock"></i></div>
                <div className="four"></div>
                <div className="three"></div>
                <div className="two"></div>
                <div className="one"></div>
    </div>);
}


//render your react application
ReactDOM.render(<SimpleCounter />,
    document.querySelector('#app')
);
    

