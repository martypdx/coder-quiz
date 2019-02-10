const test = QUnit.test;

QUnit.module('rate scorecard');

function rateScorecard(scorecard) {
    const js = scorecard.js;
    const python = scorecard.python;
    const java = scorecard.java;
    const csharp = scorecard.csharp;

    if(js > python && js > java && js > csharp) {
        return 'JavaScript';
    }

    if(python > js && python > java && python > csharp) {
        return 'Python';
    }

    if(java > js && java > python && java > csharp) {
        return 'Java';
    }

    if(csharp > js && csharp > python && csharp > java) {
        return 'C#';
    }
}

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

