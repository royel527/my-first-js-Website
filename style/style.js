document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const pin = document.getElementById('pin').value;

    if (accountNumber.length == 11 && !isNaN(Number(accountNumber))) {
        if (pin.length == 6 && !isNaN(Number(pin))) {
            window.location.href = "./maindesign.html";
        } else {
            alert('Please enter a valid 6-digit PIN.');
        }
    } else {
        alert('Please enter a valid 11-digit Number.');
    }
});
