import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';
import './Characters.css';
class Characters extends Component {
    startGame(id){
        this.props.startGame(id);
    };

    endGame(id){
        this.props.endGame(id);
    };

    characterSelect(id){
        this.props.characterSelect(id);
    };

  render() {
    let characterCards;
    if(this.props.characters){
        characterCards = this.props.characters.map(character => {
            return (
                <CharacterCard 
                    playing={this.props.playing} 
                    key={character.id} 
                    character={character}
                    startGame={this.startGame.bind(this)}
                    endGame={this.endGame.bind(this)}
                    characterSelect={this.characterSelect.bind(this)}  
                    />
            )
        });
    }
    return (
      <div className="Characters">
            <div className = "characters-box">
            <div className = "characters-container">
                {characterCards}
            </div>
            </div>
      </div>
    );
  }
}

Characters.propTypes ={
    characters : PropTypes.array,    
    startGame: PropTypes.func,
    endGame: PropTypes.func,
    characterSelect: PropTypes.func
}
export default Characters;