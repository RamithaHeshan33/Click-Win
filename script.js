let score = 0;
let activesquare = null;
let gameInterval = null;

const scoreElement = document.getElementById('score');
const holes = document.querySelectorAll('.hole');

holes.forEach(hole => {
    hole.addEventListener('click', () => {
        if (hole === activesquare) {
            score++;
            scoreElement.textContent = 'Score: ' + score;
            hole.firstElementChild.style.display = 'none';
            activesquare = null;
        } else {
            gameOver();
        }
    });
});

function showMole() {
    if (activesquare) {
        activesquare.firstElementChild.style.display = 'none';
    }
    const randomHole = holes[Math.floor(Math.random() * holes.length)];
    randomHole.firstElementChild.style.display = 'block';
    activesquare = randomHole;
}

function startGame() {
    score = 0;
    scoreElement.textContent = 'Score: ' + score;
    gameInterval = setInterval(showMole, 1000);
}

function stopGame() {
    clearInterval(gameInterval);
    if (activesquare) {
        activesquare.firstElementChild.style.display = 'none';
    }
    activesquare = null;
}

function gameOver() {
    alert('Game Over');
    stopGame();
    startGame();
}

document.addEventListener('DOMContentLoaded', () => {
    holes.forEach(hole => {
        const mole = document.createElement('div');
        mole.classList.add('mole');
        hole.appendChild(mole);
    });
    startGame();
});
