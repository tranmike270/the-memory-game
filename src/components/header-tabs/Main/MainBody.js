import React, { Component } from 'react';


class MainBody extends Component {
    render(){
        if(this.props.playing){
            return(
                <div className="main-container fixed">
                    <h1 className="main-tab-title"> The game has begun... don't FORGET! </h1>
                    <h2 className="main-tab-text"> Click any image to gain a chance to get a point! Correct choices will give you 1 point. Don't select the same image twice or you'll loose! </h2>
                    <h3 className="current-points">Points : {this.props.points.current} | High Score : {this.props.points.high}</h3>
                </div>
            )

        }else if(this.props.outcome === "loss"){
            return(
                <div className="main-container fixed">
                    <h1 className="main-tab-title"> YOU LOSS!!! </h1>
                    <h2 className="main-tab-text"> Click any image to begin trying again! Remember... DO NOT select the same image twice or you'll loose again!! </h2>
                    <h2 className="main-tab-text"> Your score this time around with your high score displayed </h2>
                    <h3 className="current-points">Points : {this.props.points.current} | High Score : {this.props.points.high}</h3>
                </div>
            )
        }else if(this.props.outcome === "win"){
            <div>
                I the Winna
                </div>
        } else {
            return (
                <div className="main-container">
                    <h1 className="main-tab-title"> Welcome to the Memory Game! </h1>
                    <h2 className="main-tab-text"> Click any image to begin the game! Each correct choice gives you 1 point. Don't select the same image twice or you'll loose! </h2>
                </div>
            )
        }
    }
}

export default MainBody;