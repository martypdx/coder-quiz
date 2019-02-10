
const json = window.localStorage.getItem('user');
let user = null;
if(json) {
    user = JSON.parse(json);
}
else {
    window.location = './';
}

const name = document.getElementById('name');
const avatar = document.getElementById('avatar');

name.textContent = user.name;
avatar.src = 'assets/avatars/' + user.avatar;

const codeQuiz = document.getElementById('code-quiz');

codeQuiz.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(codeQuiz);

    const answers = {
        verbosity: formData.get('verbosity'),
        curlies: formData.get('curlies'),
        types: formData.get('types'),
        windows: formData.get('windows'),
    };

    const json = JSON.stringify(answers);
    window.localStorage.setItem('answers', json);

    window.location = 'result.html';
});