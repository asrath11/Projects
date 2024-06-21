document.addEventListener('DOMContentLoaded', () => {
    let newGame = document.querySelector('.new-game');
    let players = document.querySelectorAll('.player');
    let diceImg = document.querySelector('.dice-img');
    const rollDice = document.querySelector('.roll-dice');
    const holdScore = document.querySelector('.hold-score');
    let totalScores = document.querySelectorAll('.total-score');
    let scores = document.querySelectorAll('.score');
    let player1 = players[0];
    let player2 = players[1];
    let player1_Score = scores[0];
    let player2_Score = scores[1];
    let player1_TotalScore = totalScores[0];
    let player2_TotalScore = totalScores[1];
    let currentPlayer = player1; // Track the current player
    let score1 = 0;
    let score2 = 0;
    let totalScore1 = 0;
    let totalScore2 = 0;
  
    const switchPlayer = () => {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    };
  
    const updateScores = () => {
      player1_Score.textContent = `Score: ${score1}`;
      player2_Score.textContent = `Score: ${score2}`;
      player1_TotalScore.textContent = `Total: ${totalScore1}`;
      player2_TotalScore.textContent = `Total: ${totalScore2}`;
    };
  
    newGame.addEventListener('click', () => {
      score1 = score2 = totalScore1 = totalScore2 = 0;
      currentPlayer = player1;
      diceImg.src = '';
      updateScores();
    });
  
    rollDice.addEventListener('click', () => {
      let newRandom = Math.trunc(Math.random() * 6) + 1;
      diceImg.src = `assets/${newRandom}.png`;
  
      if (newRandom === 1) {
        if (currentPlayer === player1) {
          score1 = 0;
          player1.classList.add('flash');
        } else {
          score2 = 0;
          player2.classList.add('flash');
        }
        switchPlayer();
      } else {
        if (currentPlayer === player1) {
          score1 += newRandom;
        } else {
          score2 += newRandom;
        }
      }
      updateScores();
  
      setTimeout(() => {
        player1.classList.remove('flash');
        player2.classList.remove('flash');
      }, 1000);
    });
  
    holdScore.addEventListener('click', () => {
      if (currentPlayer === player1) {
        totalScore1 += score1; // Add current score to total score
        score1 = 0; // Reset current score
      } else {
        totalScore2 += score2; // Add current score to total score
        score2 = 0; // Reset current score
      }
      switchPlayer();
      updateScores();
    });
  });
  