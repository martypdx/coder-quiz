function rateScorecard(scorecard) {
    const js = scorecard.js;
    const python = scorecard.python;
    const java = scorecard.java;
    const csharp = scorecard.csharp;

    if(js > python && js > csharp && js > java) {
        return 'JavaScript';
    }
    if(python > java && python > csharp) {
        return 'Python';
    }
    if(java > csharp) {
        return 'Java';
    }
    return 'C#';
}

export default rateScorecard;
