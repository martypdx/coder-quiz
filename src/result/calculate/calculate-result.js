import scoreVerbosity from './score-verbosity.js';
import scoreTypes from './score-types.js';
import scoreCurlies from './score-curlies.js';
import scoreWindows from './score-windows.js';
import rateScorecard from './rate-scorecard.js';

function calculateResult(answers) {
    const scorecard = { js: 0, python: 0, java: 0, csharp: 0 };
    scoreVerbosity(answers.verbosity, scorecard);
    scoreCurlies(answers.curlies, scorecard);
    scoreTypes(answers.types, scorecard);
    scoreWindows(answers.windows, scorecard);

    const result = rateScorecard(scorecard);
    return result;
}

export default calculateResult;