// const fio = document.querySelector('.fio').textContent;

// fio.textContent = 'Исаев Максим Сергеевич';

document.querySelector('.fio').textContent = 'Исаев Максим Сергеевич';

const buttonPhone = document.querySelector('.show-phone');

buttonPhone.addEventListener('click', togglephone);

let isPhoneInvisible = true;

function togglephone() {
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




