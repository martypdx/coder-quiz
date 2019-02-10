// import scoreCurlies from '../src/result/calculate/score-curlies.js';
const test = QUnit.test;

function scoreTypes(answer, scorecard) {
    if(answer === 'none') {
        scorecard.js += 1;
        scorecard.python += 0.5;
    }
    if(answer === 'maths') {
        scorecard.python += 1;
        scorecard.java += 0.5;
        scorecard.csharp += 0.5;
    }
}

QUnit.module('score types');

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { js: 0, python: 0, java: 0, csharp: 0 };
});

test('none', function(assert) {
    scoreTypes('none', scorecard);
    assert.deepEqual(scorecard, { js: 1, python: 0.5, java: 0, csharp: 0 });
});

test('maths', function(assert) {
    scoreTypes('maths', scorecard);
    assert.deepEqual(scorecard, { js: 0, python: 1, java: 0.5, csharp: 0.5 });
});

test('always', function(assert) {
    scoreTypes('always', scorecard);
    assert.deepEqual(scorecard, { js: 0, python: 0, java: 1, csharp: 1 });
});