const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    timeText = document.querySelector(".time b"),
    inputField = document.querySelector("input"),
    refreshBtn = document.querySelector(".refresh-word"),
    checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const startTimer = (sec) => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (sec > 0) {
            sec--;
            return timeText.innerText = sec;
        }
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        startGame();
    }, 1000);
}

const startGame = () => {
    let sec = 30
    timeText.innerText = sec;
    inputField.value = "";
    randWord = words[Math.floor(Math.random() * words.length)];
    wordArray = randWord.word.split("");
    wordArray.sort(() => Math.random() - 0.5);
    wordText.innerText = wordArray.join("");
    hintText.innerText = randWord.hint;
    correctWord = randWord.word.toLowerCase();
    startTimer(sec);
}

startGame();

const checkWord = () => {
    let inputValue = inputField.value.toLowerCase();
    if (!inputValue) return alert("Please enter the word to check!");
    if (inputValue !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
    alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
    startGame();
}

refreshBtn.addEventListener('click', startGame);
checkBtn.addEventListener('click', checkWord);