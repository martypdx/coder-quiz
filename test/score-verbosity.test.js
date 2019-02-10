import scoreVerbosity from '../src/result/calculate-results/score-verbosity.js';
const test = QUnit.test;

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { js: 0, python: 0, java: 0, csharp: 0 };
});

test('verbosity brevity', function(assert) {
    scoreVerbosity('brevity', scorecard);
    assert.deepEqual(scorecard, { js: 1, python: 0.5, java: 0, csharp: 0 });
});

test('verbosity dynamic', function(assert) {
    scoreVerbosity('dynamic', scorecard);
    assert.deepEqual(scorecard, { js: 1, python: 1, java: 0, csharp: 0 });
});

test('verbosity dynamic', function(assert) {
    scoreVerbosity('verbose', scorecard);
    assert.deepEqual(scorecard, { js: 0, python: 0, java: 1, csharp: 1 });
});

