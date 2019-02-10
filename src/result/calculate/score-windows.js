function scoreWindows(answer, scorecard) {
    if(answer === 'windows') {
        scorecard.python += 0.5;
        scorecard.csharp += 1;
    }
    if(answer === 'indifferent') {
        scorecard.js += 1;
        scorecard.python += 1;
        scorecard.java += 0.5;
    }
    if(answer === 'never') {
        scorecard.js += 0.5;
        scorecard.python += 0.5;
        scorecard.java += 1;
    }
}

export default scoreWindows;