import scoreWindows from '../src/result/calculate/score-windows.js';
const test = QUnit.test;

QUnit.module('score windows');

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { js: 0, python: 0, java: 0, csharp: 0 };
});

test('windows', function(assert) {
    scoreWindows('windows', scorecard);
    assert.deepEqual(scorecard, { js: 0, python: 0.5, java: 0, csharp: 1 });
});

test('indifferent', function(assert) {
    scoreWindows('indifferent', scorecard);
    assert.deepEqual(scorecard, { js: 1, python: 1, java: 0.5, csharp: 0 });
});

test('never', function(assert) {
    scoreWindows('never', scorecard);
    assert.deepEqual(scorecard, { js: 0.5, python: 0.5, java: 1, csharp: 0 });
});
