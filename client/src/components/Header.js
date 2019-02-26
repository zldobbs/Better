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


    /*{ Checking for dark theme?}*/

    
    constructor(props){
        super(props);

        //Use this keyword for onclick functions
    }
    
    /*{ if (Page == profilepage || visiting profile page) {
        {/* <a href="#" className="right profilePic">
           <img src = {profile} alt="Profile Picture"></img>
            </a>

            <i className="material-icons">mail_outline</i> }

    {/* if (page == feed) { }

    {/* if (Page == post creatione ) { }

    {/* Some mobile design }*/

    render() {
        return(
            <div>
                <nav className="headerBar nav-wrapper">
                    <a href="#" className="brand-logo left">
                        <img id="betterMountainLogo" src={logo} alt="Better"></img>
                    </a>
                    <ul>
                        <li>
                            <a href="#" className="left" id="betterLogo">
                                Better
                            </a>
                        </li>
                       
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;