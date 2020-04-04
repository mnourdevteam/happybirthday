function check(code) {
    if (code === 'BnzumW0zV') {
        window.open('https://www.disneyplus.com/es-419/login','_blank');
        return;
    }
   $('#shit').modal({
        keyboard: false
    })
}

function getInputValue() {
    const input = document.querySelector('#code');
    check(input.value);
}