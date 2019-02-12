import scoreVerbosity from './score-verbosity.js';
import rateScorecard from './rate-scorecard.js';

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

const scorecard = { js: 0, python: 0, java: 0, csharp: 0 };
scoreVerbosity(answers.verbosity, scorecard);
const result = rateScorecard(scorecard);

const resultDisplay = document.getElementById('result');
resultDisplay.textContent = result;