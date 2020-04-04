function check(code) {
    if (code === 'BnzumW0zV') {
        console.log('PERFECT');
        return;
    }
    console.log('SHIT');
}

function getInputValue() {
    const input = document.querySelector('#code');
    check(input.value);
}