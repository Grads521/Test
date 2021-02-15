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

function addChapter() {
    let textChapter = document.getElementById('inputText').value;

    myChapters.push(textChapter);

    let pval = '';

    for(i = 0; i < myChapters.length; i++) {
        pval = pval + myChapters[i] + '<br/>';
    }

    document.getElementById('pText').innerHTML = pval;

    document.getElementById('inputText').value = '';
}

const buttonCleanText = document.querySelector('.cleanText');

buttonCleanText.addEventListener('click', cleanText);

function cleanText() {
    document.getElementById('inputText').value = '';
}
