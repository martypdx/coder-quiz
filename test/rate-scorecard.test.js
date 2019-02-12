import rateScorecard from '../src/result/rate-scorecard.js';
const test = QUnit.test;

test('js highest on scorecard, return JavaScript', function(assert) {
    // arrange (given a specific scorecard value)
    const scorecard = { js: 1, python: 0, java: 0, csharp: 0 };

    // act (call the function using scorecard, capture result)
    const result = rateScorecard(scorecard);

    // assert (result is "JavaScript")
    assert.equal(result, 'JavaScript');
});


test('python highest on scorecard, return Python', function(assert) {
    // arrange
    const scorecard = { js: 0, python: 1, java: 0, csharp: 0 };
    // act
    const result = rateScorecard(scorecard);
    // assert
    assert.equal(result, 'Python');
});

test('java highest on scorecard, return Java', function(assert) {
    // arrange
    const scorecard = { js: 0, python: 0, java: 1, csharp: 0 };
    // act
    const result = rateScorecard(scorecard);
    // assert
    assert.equal(result, 'Java');
});

test('csharp highest on scorecard, return C#', function(assert) {
    // arrange
    const scorecard = { js: 0, python: 0, java: 0, csharp: 1 };
    // act
    const result = rateScorecard(scorecard);
    // assert
    assert.equal(result, 'C#');
});

test('csharp highest even though js beats python, return C#', function(assert) {
    // arrange
    const scorecard = { js: 1, python: 0, java: 0, csharp: 4 };
    // act
    const result = rateScorecard(scorecard);
    // assert
    assert.equal(result, 'C#');
});

test('java highest even though js beats python, return Java', function(assert) {
    // arrange
    const scorecard = { js: 1, python: 0, java: 4, csharp: 0 };
    // act
    const result = rateScorecard(scorecard);
    // assert
    assert.equal(result, 'Java');
});

test('csharp highest even though python beats javascript, return C#', function(assert) {
    // arrange
    const scorecard = { js: 0, python: 1, java: 0, csharp: 4 };
    // act
    const result = rateScorecard(scorecard);
    // assert
    assert.equal(result, 'C#');
});

