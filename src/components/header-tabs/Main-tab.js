import React, { Component } from 'react';
import MainBody from './Main/MainBody.js';
import "./tabs.css"


class MainTab extends Component {
    render(){
        return(
            <div id="tab-main" className="tab">
                <MainBody playing = {this.props.playing} points = {this.props.points} outcome = {this.props.outcome}/>
            </div>
        )
    }
}


export default MainTab;