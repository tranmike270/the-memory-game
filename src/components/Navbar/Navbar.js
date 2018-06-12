import React from "react";
import PropTypes from 'prop-types';

class Navbar extends React.Component {
    tabToggler(tabName){
        this.props.toggleTab(tabName);
    }
    render(){
        let middleNav;
        if(this.props.playing){
            middleNav = <li className = ""> <h3 className="current-points">Points : {this.props.points.current} | High Score : {this.props.points.high}</h3></li>
        }else {
            switch(this.props.outcome){
                case "win":
                middleNav = <li className = ""> YOU WON!!! Click any image to continue getting points!</li>

                break;
                case "loss":
                middleNav = <li className = ""> YOU LOST!! Click any image to try again..</li>

                break;
                default:
                middleNav = <li className = ""> Click an Image to begin</li>

            }
        }
        return(
            <nav id = "navbar" className="row">
                <ul>
                    <li className = ""> Memory Game </li>
                    {middleNav}
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

