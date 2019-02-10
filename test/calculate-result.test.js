import calculateResult from '../src/result/calculate/calculate-result.js';
const test = QUnit.test;

QUnit.module('calculate result');

test('answers scoring and rating integration', function(assert) {
    const answers = {
        curlies: 'love',
        types: 'none',
        verbosity: 'dynamic',
        windows: 'indifferent'
    };

    const result = calculateResult(answers);
    assert.equal(result, 'JavaScript');
});