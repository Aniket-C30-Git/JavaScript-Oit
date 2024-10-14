document.getElementById('pay').addEventListener('click', function() {
    let amount = document.getElementById('amt').value;
    if (amount) {
        document.getElementById('balance-msg').textContent = `Remaining amount in your bank is: ${5000 - amount}`;
        document.getElementById('pin-panel').classList.remove('hidden');
    } else {
        alert('Please enter an amount');
    }
});

document.getElementById('send-amount-btn').addEventListener('click', function() {
    let pin = document.getElementById('pin').value;
    if (pin == 2003) { // password : 2003
        alert('Amount has been sent successfully!');
        document.getElementById('pin-panel').classList.add('hidden');
        document.getElementById('amount').value = '';
        document.getElementById('balance-msg').textContent = '';
        document.getElementById('pin').value = '';
    } else {
        alert('Wrong UPI PIN entered');
    }
});
// ---------------------------------------------------
// document.getElementById('navigate-btn').addEventListener('click', function() {
//     window.location.href = 'nextpage.html'; 
// });


