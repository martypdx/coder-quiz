import calcResult from '../src/result/calculate-result.js';
const test = QUnit.test;

test('JavaScript FTW', function(assert) {
    const answers = {
        curlies: 'love',
        types: 'none',
        verbosity: 'dynamic',
        windows: 'indifferent'
    };

    const result = calcResult(answers);
    assert.equal(result, 'JavaScript');
});

test('Python FTW', function(assert) {
    const answers = {
        curlies: 'indent',
        types: 'maths',
        verbosity: 'dynamic',
        windows: 'indifferent'
    };

    const result = calcResult(answers);
    assert.equal(result, 'Python');
});

test('C# FTW', function(assert) {
    const answers = {
        curlies: 'okay',
        types: 'always',
        verbosity: 'verbose',
        windows: 'windows'
    };

    const result = calcResult(answers);
    assert.equal(result, 'C#');
});

test('Java FTW', function(assert) {
    const answers = {
        curlies: 'okay',
        types: 'always',
        verbosity: 'verbose',
        windows: 'never'
    };

    const result = calcResult(answers);
    assert.equal(result, 'Java');
});