import React from "react";
import PropTypes from 'prop-types';

import Navbar from './Navbar/Navbar.js'
import UserTab from './header-tabs/User-tab.js';
import SignupTab from './header-tabs/Signup-tab.js';
import LoginTab from './header-tabs/Login-tab.js';
import MainTab from './header-tabs/Main-tab.js';


class Header extends React.Component {
    toggleTab(tabName){
        this.props.toggleTab(tabName);
    };

    render(){
        let currentTab;
        if(this.props.playing){
            currentTab = <MainTab playing = {true} points = {this.props.points}/>
        }else {
            switch(this.props.tab){
                case "main":
                    currentTab = <MainTab 
                                    playing = {false} 
                                    points = {this.props.points}
                                    outcome = {this.props.outcome}
                                    />
                break;
                case "login":
                    currentTab = <LoginTab />
    
                break;
                case "signup":
                    currentTab = <SignupTab />
                break;
                default:
                    currentTab = <UserTab />
                break;
            }
        }
        
        return(
            <div>
                <Navbar toggleTab={this.toggleTab.bind(this)}/>
                <header className="header tab-list">
                    <div className="header-content">
                        {currentTab}
                    </div>
                </header>
            </div>
        )
    }
}

Header.propTypes = {
    tabDisplayed: PropTypes.string,
    toggleTab: PropTypes.func
}
export default Header;