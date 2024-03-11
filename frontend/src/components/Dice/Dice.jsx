import React from 'react';
import './Dice.css';

const Dice = ({ imgs }) => {
  const rollDice = async target => {
    console.log(target);
    const numberRolled = Math.floor(Math.random() * 6) + 1;
    const dice = target;
    dice.classList = `dice`;
    setTimeout(() => {
      dice.classList = `dice roll-${numberRolled}`;
    }, 200);
    // alert(numberRolled);
  };
  return (
    <div onClick={e => rollDice(e.currentTarget)} className="dice roll-3">
      {imgs.array.map((item, index) => {
        return (
          <div className="side" key={index}>
            <img src={item} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Dice;
