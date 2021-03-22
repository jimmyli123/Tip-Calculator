

document.querySelector('#calculate').addEventListener('click', calculateTip)

function calculateTip() {
    let total = document.querySelector('#billTotal').value;
    console.log(total);
}