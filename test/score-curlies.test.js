import scoreCurlies from '../src/result/calculate/score-curlies.js';
const test = QUnit.test;

QUnit.module('score curlies');

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { js: 0, python: 0, java: 0, csharp: 0 };
});

test('curlies love', function(assert) {
    scoreCurlies('love', scorecard);
    assert.deepEqual(scorecard, { js: 1, python: 0, java: 0.5, csharp: 0.5 });
});

test('curlies okay', function(assert) {
    scoreCurlies('okay', scorecard);
    assert.deepEqual(scorecard, { js: 0.5, python: 0, java: 1, csharp: 1 });
});

test('curlies indent', function(assert) {
    scoreCurlies('indent', scorecard);
    assert.deepEqual(scorecard, { js: 0, python: 1, java: 0, csharp: 0 });
});
