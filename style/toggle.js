document.querySelector('.CashOut').style.display = 'none';
document.querySelector('.transfer-money').style.display = 'none';
document.querySelector('.pay-bill').style.display = 'none';

document.getElementById('add-moneybox').addEventListener('click', function() {
    document.getElementById('add-money').style.display = 'block';
    document.querySelector('.CashOut').style.display = 'none';
    document.querySelector('.transfer-money').style.display = 'none';
    document.querySelector('.pay-bill').style.display = 'none';
});

document.getElementById('CashOut-box').addEventListener('click', function() {
    document.getElementById('add-money').style.display = 'none';
    document.querySelector('.CashOut').style.display = 'block';
    document.querySelector('.transfer-money').style.display = 'none';
    document.querySelector('.pay-bill').style.display = 'none';
});

document.getElementById('transfer-box').addEventListener('click', function() {
    document.getElementById('add-money').style.display = 'none';
    document.querySelector('.CashOut').style.display = 'none';
    document.querySelector('.transfer-money').style.display = 'block';
    document.querySelector('.pay-bill').style.display = 'none';
});

document.getElementById('pay-bill-box').addEventListener('click', function() {
    document.getElementById('add-money').style.display = 'none';
    document.querySelector('.CashOut').style.display = 'none';
    document.querySelector('.transfer-money').style.display = 'none';
    document.querySelector('.pay-bill').style.display = 'block';
});

document.getElementById('cashout-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const amount = document.getElementById('amount2').value;
    const convertAmount = parseFloat(amount);

    const pin = document.getElementById('pin2').value;
    const convertpin = pin; // No need to convert pin to float

    const number = document.getElementById('account-number2').value;
    const convertNumber = number; // No need to convert account number to float

    const dollar = document.getElementById('dollar').innerText;
    const convertdollar = parseFloat(dollar);

    if (convertpin.length == 6 && convertNumber.length == 11) {
        if (convertAmount <= convertdollar) {
            const sum = convertdollar - convertAmount;
            document.getElementById('dollar').innerText = sum;
            alert('CashOut successful.');
        } else {
            alert('Insufficient balance.');
        }
    } else {
        alert('Please enter a valid 11-digit Number and 6-digit PIN.');
    }
});

