'use strict';

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = 'Correct Number! 🎉';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value)
// document.querySelector('.guess').value = 23;

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
});

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    // when there is no guess entered
    if(!guess){
        displayMessage('⛔️ No Number!');
    // when player wins    
    }else if(guess === secretNumber){
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        
        // manipulating css styles through the DOM
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(highscore < score){
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }
      
    } else if(guess !== secretNumber){
        if(score > 1){
            const message = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
            displayMessage(message);
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }

    // // when guess is too high  
    // }else if(guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📈 Too High!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    
    // // when guess is too low
    // }else if(guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📉 Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});


