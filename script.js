let myChapters = [
    'Глава 1',
    'Глава 2',
    'Глава 3',
];

let chapterBlock = document.querySelector('.myChapters');

myChapters.forEach(function (item) {
    let chapterOne = document.createElement('div');
    chapterOne.innerText = item;

    chapterBlock.append(chapterOne);
});

const input = document.querySelector('.input_field')

input.addEventListener('keyup', function () {
    const ageBlock = document.querySelector('.myChapters');
    ageBlock.innerText = input.value;
});
