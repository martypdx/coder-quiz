function rateScorecard(scorecard) {
    const js = scorecard.js;
    const python = scorecard.python;
    const java = scorecard.java;
    const csharp = scorecard.csharp;

    if(js >= python && js >= java && js >= csharp) {
        return 'JavaScript';
    }

    if(python > js && python >= java && python >= csharp) {
        return 'Python';
    }

    if(java > js && java > python && java > csharp) {
        return 'Java';
    }

    if(csharp > js && csharp > python && csharp >= java) {
        return 'C#';
    }
}

export default rateScorecard;