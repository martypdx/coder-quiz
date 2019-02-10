const test = QUnit.test;

function scoreVerbosity(answer, scorecard) {
    if(answer === 'brevity') {
        scorecard.js += 1;
        scorecard.python += 0.5;
    }
}

test('verbosity brevity', function(assert) {
    const scorecard = { js: 0, python: 0, java: 0, csharp: 0 };
    scoreVerbosity('brevity', scorecard);
    assert.deepEqual(scorecard, { js: 1, python: 0.5, java: 0, csharp: 0 });
});

