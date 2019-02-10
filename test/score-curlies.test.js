const test = QUnit.test;

QUnit.module('score curlies');

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { js: 0, python: 0, java: 0, csharp: 0 };
});

function scoreCurlies(answer, scorecard) {
    if(answer === 'love') {
        scorecard.js += 1;
        scorecard.java += 0.5;
        scorecard.csharp += 0.5;
    }
}

test('curlies love', function(assert) {
    scoreCurlies('love', scorecard);
    assert.deepEqual(scorecard, { js: 1, python: 0, java: 0.5, csharp: 0.5 });
});
