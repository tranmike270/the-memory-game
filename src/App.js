import React, { Component } from 'react';
import Header from "./components/Header.js";
import GameBody from "./components/GameBody.js";
import characters from "./characters.json";
import './App.css';

function shuffleArray(arr){
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
return arr;
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      tabDisplayed : "main",
      playing : false,
      outcome : "TBD",
      characters : characters,
      points : {
        current: 0,
        high: 0
      }
    }
  }


  getTab(){
    let tabDisplayed = this.state.tabDisplayed;
    tabDisplayed = "main"
    this.setState({tabDisplayed: tabDisplayed});
  };

  getCharacters(){
    let characters = this.state.characters.map(character => {
        character.chosen = false;
        return character;
    });

    this.setState({characters: shuffleArray(characters)});
    console.log(characters);
  }

  startGame(id){
    this.handleCharacterChosen(id);
    this.setState({
        playing: true,
        tabDisplayed : "main",
        outcome: "TBD"
      });

  }

  endGame(){
    this.componentWillMount();
    this.setState({
      playing: false,
      tabDisplayed : "main",
      outcome : "loss"
      });
  };

  componentWillMount(){
    this.getCharacters();
  };

  componentDidMount(){
    this.getTab();
  }
  handleTabToggle(newTab){

    this.setState({tabDisplayed: newTab});
    
  };

  handleCharacterChosen(id){
    let characters = this.state.characters.map(character => {
      if(character.id === id){
        character.selected = true;
      };
      return character;
    });
    let newPoints = this.state.points
    if(this.state.outcome === "loss"){
      newPoints.current = 1;
    }else {
      newPoints.current++;
    };

    if(newPoints.current > newPoints.high){
      newPoints.high = newPoints.current;
    };

    this.setState({
        characters: shuffleArray(characters),
        points: newPoints});
    
    if(newPoints.current === 25){
      this.setState({
        outcome : "win",
        playing : false,
        });
    };
  };


  render(){
    return(
      <div className="App">
        <Header 
          tab={this.state.tabDisplayed} 
          toggleTab={this.handleTabToggle.bind(this)} 
          playing={this.state.playing}
          points = {this.state.points}
          outcome = {this.state.outcome}
        />
        <GameBody playing={this.state.playing} characters={this.state.characters} onSelectCharacter={this.handleCharacterChosen.bind(this)} endGame={this.endGame.bind(this)} startGame={this.startGame.bind(this)}/>
      </div>
    )
  }
};


export default App;
