// const games = [
//     'Lol',
//     'CS',
//     'Apex',
// ];

// const input = document.querySelector('.input_field')
//
// input.addEventListener('keyup', function () {
//     const ageBlock = document.querySelector('.age');
//     ageBlock.innerText = input.value;
// });



// const gameBlock = document.querySelector('.myGames');
//
// games.forEach(function (item) {
//     const gameOne = document.createElement('div');
//     gameOne.innerText = item;
//
//     gameBlock.append(gameOne);
// });

document.getElementById("fio").innerHTML = "Исаев Максим Сергеевич";

document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;

    let elem = document.getElementById(id);

    elem.hidden = !elem.hidden;
});
