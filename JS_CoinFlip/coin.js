"use strict";

const main = document.querySelector('.main');
const game = {score:0, streak:0};

const btn = document.createElement('button');
const Tailsbtn = document.createElement('button');
const output = document.createElement('div');
const scoring = document.createElement('div');
const message = document.createElement('div');

message.textContent = 'Press Button to Start Game';

main.append(message);
main.append(scoring);
main.append(output);
main.append(btn);
main.append(Tailsbtn);

scoring.classList.add('score');
message.classList.add('message');


btn.classList.add('btn');
Tailsbtn.classList.add('btn');
btn.textContent = "Start Game";
Tailsbtn.textContent = "Tails";


const coin = document.createElement('div');
const sideA = document.createElement('div');
const sideB = document.createElement('div');

output.append(coin);
coin.classList.add('coin');
coin.style.display = 'none';

coin.append(sideA);
coin.append(sideB);

sideA.innerHTML = "&#128516;";
sideB.innerHTML = "&#128531;";


btn.addEventListener('click', playGame);
Tailsbtn.addEventListener('click', playGame);
Tailsbtn.style.display = 'none';

btn.style.backgroundColor = "red";
Tailsbtn.style.backgroundColor = "blue";



function playGame(e){
    console.log(e.target.textContent);
    const el = e.target;
    if(el.textContent === 'Start Game'){
        game.score=0;
        game.streak=0;
        message.textContent = 'Select Heads/Tails';
        btn.textContent = "Heads";
        Tailsbtn.style.display = 'block';
        coin.style.display = 'block';
        addScore();
    } else if(el.textContent === 'Heads'){
        // console.log('FLIP COIN');
        coinFlipper('Heads');
    } else if(el.textContent === 'Tails'){
        // console.log('FLIP COIN');
        coinFlipper('Heads');
    }
}


function coinFlipper(val){
    const ranValue = Math.floor(Math.random()*2);
    // console.log(ranValue);
    let result = '';
    if(ranValue === 1){
        sideA.style.zIndex = '1';
        sideB.style.zIndex = '0';
        result = 'Heads';
    } else{
        sideB.style.zIndex = '1';
        sideA.style.zIndex = '0';
        result = 'Tails';
    }
    // add Scoring
    if(result === val){
        game.score++;
        game.streak++;
        message.textContent = `You Picked ${val}, Correct! it was ${result}`;
    } else{
        game.score--;
        game.streak = 0;
        message.textContent = `You Picked ${val}, Wrong! it was ${result}`;
    }

    addScore();
    return result;
}

function addScore(){
    scoring.innerHTML = `Score: ${game.score} Streak(${game.streak})`;
}