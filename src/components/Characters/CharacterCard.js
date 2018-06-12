import React, { Component } from 'react';
import CardBody from './CardBody.js';
import PropTypes from 'prop-types';


class CharacterCard extends Component {

  startGame(id){
    this.props.startGame(id);
  };

  endGame(id){
    this.props.endGame(id);
  };

  characterSelect(id){
    this.props.characterSelect(id);
  };

  render(){       
    const props = this.props;
    if(props.playing){
      if(props.character.selected){
        return (
    
          <div className="card selected" onClick={this.endGame.bind(this, "loss", props.character.id)}>
            <CardBody character={props.character}/>
          </div>
          
        )
      }else {
        return (
          <div className="card" onClick={this.characterSelect.bind(this, props.character.id)}>
              <CardBody character={props.character}/>
            </div>
          )
      }
    } else {
      return (
        <div className="card" onClick={this.startGame.bind(this, props.character.id)}>
            <CardBody character={props.character}/>
          </div>
        )  
    }

  }
}

CharacterCard.propTypes ={
  character : PropTypes.object,    
  startGame: PropTypes.func,
  endGame: PropTypes.func,
  characterSelect: PropTypes.func
}

export default CharacterCard;
