function scoreCurlies(answer, scorecard) {
    if(answer === 'love') {
        scorecard.js += 1;
        scorecard.java += 0.5;
        scorecard.csharp += 0.5;
    }
    if(answer === 'okay') {
        scorecard.js += 0.5;
        scorecard.java += 1;
        scorecard.csharp += 1;
    }
    if(answer === 'indent') {
        scorecard.python += 1;
    }
}

export default scoreCurlies;