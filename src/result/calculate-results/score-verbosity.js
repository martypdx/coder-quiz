function scoreVerbosity(answer, scorecard) {
    if(answer === 'brevity') {
        scorecard.js += 1;
        scorecard.python += 0.5;
    }
    if(answer === 'dynamic') {
        scorecard.js += 1;
        scorecard.python += 1;
    }
    if(answer === 'verbose') {
        scorecard.java += 1;
        scorecard.csharp += 1;
    }
}

export default scoreVerbosity;