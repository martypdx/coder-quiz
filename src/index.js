const images = [
    'beard.png',
    'bowl.png',
    'man.png',
    'old-man.png',
    'person.png',
    'pigtails.png',
    'sunglasses.png',
    'woman.png'
];

const avatars = document.getElementById('avatars');
const userSignin = document.getElementById('user-signin');

for(let index = 0; index < images.length; index++) {
    const image = images[index];
    const label = document.createElement('label');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'avatar';
    radio.required = true;
    radio.value = image;
    label.appendChild(radio);
    
    const img = document.createElement('img');
    img.src = 'assets/avatars/' + image;
    label.appendChild(img);

    avatars.appendChild(label);
}

userSignin.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(userSignin);

    const user = {
        name: formData.get('name'),
        avatar: formData.get('avatar')
    };

    const json = JSON.stringify(user);

    window.localStorage.setItem('user', json);

    window.location = 'quiz.html';
});