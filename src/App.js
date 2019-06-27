// Import React Libraries
import React, { Component } from 'react';

// Import Components
import CharactersList from './characterList.js';
import characters from './characters.js';
import CharacterDetail from './characterDetail.js'

// Import CSS
import './App.css';

class App extends Component {
  state = {
    characterData: []

  }

  loadData = async () => {
    const response = await fetch('./characters.js');
    const data = await response.json();
    return data.results;
  }

  componentDidMount() {
    this.setState({
      characterData: characters
    })
  }
  
  // pickName(nameSelected){
  //   let characterDetails = this.state.characterData.map(character =>
  //     <li key={character.url}>
  //     <CharacterDetail character={character} />
  // </li>


  // }

  render () {
    const {characterData} = this.state
    return (
      <div className="App">
        <CharactersList characterData={characterData} />
      </div>
    );
  }
}


export default App;
