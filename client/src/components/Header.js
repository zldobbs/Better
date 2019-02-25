/* example component. follow this template */

import React from 'react';

//Materialize downloaded onto webserver. No need for a CDN
//Also Trevor says its more secure this way
import 'materialize-css/dist/css/materialize.min.css';

//Design imports
import logo from '../assets/img/mountain.png';
import profile from '../assets/img/corgi.jpeg';
import '../App.css';

class Header extends React.Component {
    render() {
        return(
            <div>
                <nav className="headerBar">
                    <a href="#" className="brand-logo left">
                        <img id="betterMountainLogo" src={logo} alt="Better"></img>
                    </a>
                    
                    <a href="#" className="left">
                        <p id="betterLogo">Better</p>
                    </a>

                    <a href="#" className="right profilePic">
                        <img src = {profile} alt="Profile Picture"></img>
                    </a>

                    <i className="material-icons">mail_outline</i>

                </nav>
            </div>
        );
    }
}

export default Header;