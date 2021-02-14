// const fio = document.querySelector('.fio').textContent;

// fio.textContent = 'Исаев Максим Сергеевич';

document.querySelector('.fio').textContent = 'Исаев Максим Сергеевич';

const buttonPhone = document.querySelector('.show-phone');

buttonPhone.addEventListener('click', togglePhone);

let isPhoneInvisible = true;

function togglePhone() {
    if (isPhoneInvisible === false) {
        isPhoneInvisible = true;
        buttonPhone.textContent = 'Показать телефон';

    } else {
        isPhoneInvisible = false
        buttonPhone.textContent = 'Скрыть телефон';
    }
    const showPhone = document.querySelector('.phone');
    showPhone.hidden = isPhoneInvisible;
}

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


// const buttonAddChapter = document.querySelector('addChapter');
//
// const buttonCleanChapter = document.querySelector('cleanChapter');
//
// buttonAddChapter.addEventListener('click', addChapter);
//
// buttonCleanChapter.addEventListener('click', cleanChapter);

// function addChapter() {
//     myChapters.push('Глава 4')
// }

// function cleanChapter() {
//     myChapters.pop()
// }



