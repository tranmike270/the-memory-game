import React from "react";
import PropTypes from 'prop-types';
import Characters from './Characters/Characters.js'
class GameBody extends React.Component {
    startGame(id){
        this.props.startGame(id);
    };

    endGame(id){
        this.props.endGame(id);
    }

    onSelectCharacter(id){
        this.props.onSelectCharacter(id);
    };

    render(){
        return(
            <div className = "game-body row">
                    <h4 className="col-12"> Characters </h4>
                <Characters 
                    playing={this.props.playing} 
                    characters={this.props.characters} 
                    startGame={this.startGame.bind(this)} 
                    endGame={this.endGame.bind(this)} 
                    characterSelect={this.onSelectCharacter.bind(this)}
                />
            </div>
        )
    }
};

GameBody.propTypes = {
    characters: PropTypes.array,
    startGame: PropTypes.func,
    endGame: PropTypes.func,
    onSelectCharacter: PropTypes.func
}

export default GameBody;