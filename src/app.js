import React, { Component } from 'react';
import './app.css';
import Announcement from './Announcement';
import resetButton from  './resetButton';
import tile from './tile';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      gameBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' ',
      ]
    }
  }
  updateBoard (loc, player) {

  }
  render (){
  return (
   <div className="container">
      <div className="menu">
         <h1> Tic-Tac-Toe</h1>
             <Announcement />
             <resetButton />
</div>
{this.state.gameBoard.map(function(value,i){
  <tile
  key={i} 
  loc={i}
  value={value}
  updateBoard={this.updateBoard.bind(this)
  turn={this.state.turn}}
  />
  
})}
</div>
  );
  }
 }

 export default App;