import rateScorecard from '../src/result/calculate/rate-scorecard.js';
const test = QUnit.test;

QUnit.module('rate scorecard');

test('JavaScript', function(assert) {
    const result = rateScorecard({ 
        js: 1, python: 0, java: 0, csharp: 0
    });
    assert.equal(result, 'JavaScript');
});

test('Python', function(assert) {
    const result = rateScorecard({ 
        js: 0, python: 1, java: 0, csharp: 0
    });
    assert.equal(result, 'Python');
});

test('Java', function(assert) {
    const result = rateScorecard({ 
        js: 0, python: 0, java: 1, csharp: 0
    });
    assert.equal(result, 'Java');
});

test('C#', function(assert) {
    const result = rateScorecard({ 
        js: 0, python: 0, java: 0, csharp: 1
    });
    assert.equal(result, 'C#');
});

test('tie JavaScript wins', function(assert) {
    const result = rateScorecard({ 
        js: 1, python: 1, java: 1, csharp: 1
    });
    assert.equal(result, 'JavaScript');    
});

test('tie Python beats C# and Java', function(assert) {
    const result = rateScorecard({ 
        js: 0, python: 1, java: 1, csharp: 1
    });
    assert.equal(result, 'Python');    
});

test('tie C# beats Java', function(assert) {
    const result = rateScorecard({ 
        js: 0, python: 0, java: 1, csharp: 1
    });
    assert.equal(result, 'C#');    
});
