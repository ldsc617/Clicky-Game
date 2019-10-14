import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import images from './images';

// function App() {
//   return (
//     <div className="App">
//       <h1>
//       <header className="App-header">
//        Hello!
//       </header>
//       </h1>
//     </div>
//   );
// }
class App extends Component {
  // this sets the state for the start of the game, which are both 0
 state = {
    score: 0,
    highScore: 0,

    //gives color to right/wrong onclick option
    navMsgClr: '',
    navMsg: 'Click on an image to start the game!',

  //all imgs are in an array which will shuffle and track clicked
    allChars: this.shuffleArray(),
    wasClicked: [],
    //shakes when wrong
    shake: false
  };
  clickEvent = this.checkClicked.bind(this);
  //shuffle shuffle the pics after user clicks one
  shuffleArray() {
    const newArray = images.slice();
    const shuffleArray = [];
    
    while (newArray.length > 0) {
      shuffleArray.push(newArray.splice(Math.floor(Math.random( newArray.length), 1)[0])
      )};
  return shuffleArray;
}
checkClicked(clickedElement) {
  const prevState = this.state.wasClicked.slice();
  const shuffled = this.shuffleArray();
  var score = this.state.score;
  var highScore = this.state.highScore;

  if (!this.state.wasClicked.includes(clickedElement)) {
    if (score === highScore) {
      score++; 
      highScore++;

    }
    else {
      score++;
    }
    prevState.push(clickedElement);

  }

  if (this.state.wasClicked.includes(clickedElement)) {
    let score = 0;
    return this.setState({
      score: score,
      highScore: highScore,
      navMsgClr: "incorrect",
      navMessage:"Incorrect!",
      allChars: shuffled,
      wasClicked: [],
      shake: true
    });
  }

  //when user clicks correctly so score increases by 1
  this.setState({
    score: score,
    highScore: highScore,
    navMsgClr: 'correct',
    navMessage: 'You Guessed Correctly!',
    allCharacters: shuffled,
    wasClicked: prevState,
    shake: false
  });

  //takes off green light after a successfull click clack
return setTimeout(() => this.setState({ navMsgClr: ""}), 500);
}
//The Renderings
render() {
  const state = this.state;
  return (
    <div>
      <Navbar
      score={state.score}
      highScore={state.highScore}
      navMsgClr={state.navMsgClr}
      navMessage={state.navMessage}/>

      <Jumbotron />

      <Container
      shake={state.shake}
      chars={state.allChars}
      clickEvent={this.clickEvent}/>
      <Footer />

    </div>
  );
}
}


export default App;
