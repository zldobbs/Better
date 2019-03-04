/* example component. follow this template */

import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class Footer extends React.Component  {
    
    // componentDidMount() {

    //     let path = this.props.location.pathname;

    //     this.pageBodyLoader(path);
    // };

    render() {
        
        // if(not mobile design)
        return(
            <div>
                <footer className="page-footer footerBar">
                  <div className="footer-copyright">
                    <div className="container">
                        <a className="grey-text text-lighten-4 left" href="#">About</a>

                        <a className="grey-text text-lighten-4" 
                            href="https://suicidepreventionlifeline.org">
                            
                            Get Help
                        </a>
                        <p className="grey-text text-lighten-4 right">1-800-273-8255</p>
                    </div>
                  </div>
                </footer>
            </div>
        );
    };
}

export default Footer;