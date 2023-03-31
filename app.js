const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const resetButton = document.querySelector('#reset');
const winnigScoreSelect = document.querySelector('#winningscore');
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Btn.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score ++;
        p1Display.textContent = p1Score;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Btn.classList.add('disabled');
            p2Btn.classList.add('disabled');
            p1Display.classList.add('winningColor');
            p2Display.classList.add('loserColor');
        }
    }
});

p2Btn.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score ++;
        p2Display.textContent = p2Score;
        if (p2Score === winningScore) {
            isGameOver = true;
            p1Btn.classList.add('disabled');
            p2Btn.classList.add('disabled');
            p1Display.classList.add('loserColor');
            p2Display.classList.add('winningColor');

        }
    }
});

winnigScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(winnigScoreSelect.value);
    reset();
});


resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Btn.classList.remove('disabled');
    p2Btn.classList.remove('disabled');
    if (p1Display.classList.contains('winningColor')) {
        p1Display.classList.remove('winningColor');
        p2Display.classList.remove('loserColor');   
    } else {
        p1Display.classList.remove('loserColor');
        p2Display.classList.remove('winningColor');   
    }

};