import calculateResult from './calculate/calculate-result.js';

const userJSON = window.localStorage.getItem('user');
let user = null;
if(userJSON) {
    user = JSON.parse(userJSON);
}
else {
    window.location = './';
}

const answersJSON = window.localStorage.getItem('answers');
let answers = null;
if(answersJSON) {
    answers = JSON.parse(answersJSON);
}
else {
    window.location = './';
}

const name = document.getElementById('name');
const avatar = document.getElementById('avatar');

name.textContent = user.name;
avatar.src = 'assets/avatars/' + user.avatar;

const resultDisplay = document.getElementById('result');
const result = calculateResult(answers);
resultDisplay.textContent = result;