const test = QUnit.test;

QUnit.module('rate scorecard');

function rateScorecard(scorecard) {

}

test('JavaScript', function(assert) {
    const result = rateScorecard({ 
        js: 3, python: 2, java: 1, csharp: 0
    });
    assert.equal(result, 'JavaScript');
});

