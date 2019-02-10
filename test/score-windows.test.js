const test = QUnit.test;

function scoreWindows(answer, scorecard) {

}

QUnit.module('score windows');

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { js: 0, python: 0, java: 0, csharp: 0 };
});

test('windows', function(assert) {
    scoreWindows('windows', scorecard);
    assert.deepEqual(scorecard, { js: 0, python: 0.5, java: 0, csharp: 1 });
});
