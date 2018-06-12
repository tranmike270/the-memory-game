import React from "react";
import PropTypes from 'prop-types';

class Navbar extends React.Component {
    tabToggler(tabName){
        this.props.toggleTab(tabName);
    }
    render(){
        return(
            <nav id = "navbar" className="row">
                <ul>
                    <li className = ""> Hello There </li>
                    <li className = ""> Click an Image to begin</li>
                    <li className = "">
                        <a className="login"  onClick={this.tabToggler.bind(this, 'login')} disabled>Log-In</a>
                        <a className="signup" onClick={this.tabToggler.bind(this, 'signup')} disabled>Sign-Up</a>
                    </li>
                </ul>
            </nav>
        )
    }
};

Navbar.propTypes = {
    toggleTab: PropTypes.func
}

export default Navbar;

