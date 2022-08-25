// get current deposit and withdraw balance
function getvalue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldRead = inputField.value;
    const inputFieldText = parseFloat(inputFieldRead);

    //clear input field 
    inputField.value = '';

    return inputFieldText;
}

// get and update deposit/withdraw balance
function selectPrevValue(selectId, Amount) {
    const selectValue = document.getElementById(selectId);
    const newInput = selectValue.innerText;
    const newInputText = parseFloat(newInput);
    selectValue.innerText = newInputText + Amount;
}

function getFinalAmount() {
    const balanceTotal = document.getElementById('balanceTotal');
    const balanceTotalText = balanceTotal.innerText;
    const mainBalance = parseFloat(balanceTotalText);
    return mainBalance;
}


//get and update withdraw amount
function updateMAin(newAmount, isADD) {
    const balanceTotal = document.getElementById('balanceTotal');
    /*
        const balanceTotalText = balanceTotal.innerText;
        const mainBalance = parseFloat(balanceTotalText); 
    */

    const mainPreviousBalance = getFinalAmount();
    if (isADD == true) {
        balanceTotal.innerText = mainPreviousBalance + newAmount;
    }
    else {
        balanceTotal.innerText = mainPreviousBalance - newAmount;
    }
}


document.getElementById('depositBtn').addEventListener('click', function () {

    const depositAmount = getvalue('deposit-input')
    if (depositAmount > 0) {
        //get and update value
        selectPrevValue('dep-addAmount', depositAmount);
        //update balance 
        updateMAin(depositAmount, true);
    }
})


document.getElementById('withdrawBtn').addEventListener('click', function () {

    const withdrawAmountInput = getvalue('withdraw-input');
    const finalBalance = getFinalAmount();
    if (withdrawAmountInput > 0 && withdrawAmountInput <= finalBalance) {
        //get and update value
        selectPrevValue('wit-amount', withdrawAmountInput);
        //update balance 
        updateMAin(withdrawAmountInput, false);
    }

    if (withdrawAmountInput > finalBalance) {
        const element = document.getElementById('comment');
        const textElement = element.innerHTML;
        element.innerHTML = '<h3 class="text-2xl mt-2 text-center text-rose-600">" Yoy can not <b>WITHDRAW</b> more than what you have in your account "</h3>';
        element.append(textElement);
    }
})