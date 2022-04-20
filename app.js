const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const btnCancel = document.querySelector('#btn-cancel');
const btnConfirm = document.querySelector('#btn-confirm');
const listTotal = document.querySelector('#list-total');
const tot = document.querySelector('#tot');
const alertCtrl = document.querySelector('ion-alert');

let totExp = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

btnConfirm.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (enteredReason.trim().length <= 0 ||
        enteredAmount <= 0 ||
        enteredAmount.trim().length <= 0) {
            const alert = document.createElement('ion-alert');
            alert.header = 'Invalid inputs';
            alert.message = 'Please enter a valid reason and amount!';
            alert.buttons = ['Okay'];
            document.body.appendChild(alert);
            return alert.present();
        return;
    }
    console.log(enteredReason);
    console.log(enteredAmount);

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;
    listTotal.appendChild(newItem);

    totExp += +enteredAmount;
    tot.textContent = totExp;

    clear();

});

btnCancel.addEventListener('click', clear);

