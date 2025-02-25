// --------add money ------------------

document.getElementById('addmoney-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertAmount = parseFloat(amount);

    const pin = document.getElementById('pin').value;
    const convertpin = pin; // No need to convert pin to float

    const number = document.getElementById('account-number').value;
    const convertNumber = number; // No need to convert account number to float

    const dollar = document.getElementById('dollar').innerText;
    const convertdollar = parseFloat(dollar);

    if (convertpin.length == 6 && convertNumber.length == 11 && !isNaN(convertAmount)) {
        const sum = convertAmount + convertdollar;
        document.getElementById('dollar').innerText = sum;
        alert('Money added successfully.');
    } else {
        if (convertpin.length != 6) {
            alert('Please enter a valid 6-digit PIN.');
        } else if (convertNumber.length != 11) {
            alert('Please enter a valid 11-digit Number.');
        } else if (isNaN(convertAmount) || convertAmount <= 0) {
            alert('Please enter a valid amount.');
        }
    }
});
