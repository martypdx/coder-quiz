
function calculateResult(answers) {
    let js = 0;
    let python = 0;
    let java = 0;
    let csharp = 0;

    if(answers.verbosity === 'brevity') {
        js += 1;
        python += 0.5;
    }
    else if(answers.verbosity === 'dynamic') {
        python += 1;
        js += 0.5;
    }
    else { // verbose
        java += 1;
        csharp += 1;
    }

    if(answers.curlies === 'love') {
        js += 1;
        java += 0.5;
        csharp += 0.5;
    }
    else if(answers.curlies === 'okay') {
        js += 0.5;
        java += 1;
        csharp += 1;
    }
    else { // indent
        python += 1;
    }

    if(answers.types === 'none') {
        js += 1;
        python += 0.5;
    }
    else if(answers.types === 'maths') {
        python += 1;
    }
    else { // always
        java += 1;
        csharp += 1;        
    }

    if(answers.windows === 'windows') {
        csharp += 1;
    }
    else if(answers.windows === 'indifferent') {
        js += 1;
        python += 1;
        java += 0.5;
    }
    else { // never
        java += 1;
        js += 0.5;
        python += 0.5;
    }

    if(js >= python && js >= java && js >= csharp) {
        return 'JavaScript';
    }

    if(python >= js && python >= java && python >= csharp) {
        return 'Python';
    }

    if(csharp >= js && csharp >= java && csharp >= python) {
        return 'C#';
    }

    if(java >= js && java >= csharp && java >= python) {
        return 'Java';
    }
}

export default calculateResult;