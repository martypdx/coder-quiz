const test = QUnit.test;

function scoreVerbosity(answer, scorecard) {
    if(answer === 'brevity') {
        scorecard.js += 1;
        scorecard.python += 0.5;
    }
    if(answer === 'dynamic') {
        scorecard.js += 1;
        scorecard.python += 1;
    }
    if(answer === 'verbose') {
        scorecard.java += 1;
        scorecard.csharp += 1;
    }
}

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { js: 0, python: 0, java: 0, csharp: 0 };
});

test('score verbosity: brevity', function(assert) {
    scoreVerbosity('brevity', scorecard);
    assert.deepEqual(scorecard, { js: 1, python: 0.5, java: 0, csharp: 0 });
});

test('score verbosity: dynamic', function(assert) {
    scoreVerbosity('dynamic', scorecard);
    assert.deepEqual(scorecard, { js: 1, python: 1, java: 0, csharp: 0 });
});

test('score verbosity: verbose', function(assert) {
    scoreVerbosity('verbose', scorecard);
    assert.deepEqual(scorecard, { js: 0, python: 0, java: 1, csharp: 1 });
});