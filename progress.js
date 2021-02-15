let myChapters = [
    'Глава 1',
    'Глава 2',
    'Глава 3',
];

let chapterBlock = document.querySelector('.myChapters');

myChapters.forEach(function (item) {

    let chapterOne = document.createElement('li');
    chapterOne.innerText = item;

    chapterBlock.append(chapterOne);
});

const buttonAddChapter = document.querySelector('.addChapter');

buttonAddChapter.addEventListener('click', addChapter);

function addChapter () {
    chapterBlock.innerHTML = null;

    let textChapter = document.querySelector('.inputText').value;

    myChapters.push(textChapter);

    myChapters.forEach(function (item) {

        let chapterTwo = document.createElement('li');
        chapterTwo.innerText = item;

        chapterBlock.append(chapterTwo);
    })

    document.querySelector('.inputText').value = '';
}

const buttonCleanText = document.querySelector('.cleanText');

buttonCleanText.addEventListener('click', cleanText);

function cleanText() {
    document.querySelector('.inputText').value = '';
}
