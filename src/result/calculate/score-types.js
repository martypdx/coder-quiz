function scoreTypes(answer, scorecard) {
    if(answer === 'none') {
        scorecard.js += 1;
        scorecard.python += 0.5;
    }
    if(answer === 'maths') {
        scorecard.python += 1;
        scorecard.java += 0.5;
        scorecard.csharp += 0.5;
    }
    if(answer === 'always') {
        scorecard.java += 1;
        scorecard.csharp += 1;
    }
}

export default scoreTypes;