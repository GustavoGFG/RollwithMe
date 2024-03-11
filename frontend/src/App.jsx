import React from 'react';
import Dice from './components/Dice/Dice';
import './App.css';
import { foodDiceImg, movieDiceImg } from './data/imgPath';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  function rollAll() {
    const dices = document.getElementsByClassName('dice');
    console.log(dices);
    for (let dice of dices) {
      dice.click();
    }
  }
  return (
    <>
      <div className="container">
        <Header props={{ rollAll: rollAll }} />
        <div className="dice-container">
          <Dice imgs={{ array: foodDiceImg }} />
          <Dice imgs={{ array: movieDiceImg }} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
