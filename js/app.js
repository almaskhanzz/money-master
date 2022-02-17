//error messages for calculate portion
function getError() {
    const err = document.getElementById('err-msg');
    return err;
}
function getErrorExpenses() {
    const err = document.getElementById('err-msg2');
    return err;
}
//error messages for save portion
function getEmptyError() {
    const err = document.getElementById('err-msg-empty');
    return err;
}
function getAmountError() {
    const err = document.getElementById('err-msg-amount');
    return err;
}
//claer text field if gets error
function clearTextField() {
    const expensesField = document.getElementById('total-expenses');
    expensesField.innerText = '';
    const balanceField = document.getElementById('balance');
    balanceField.innerText = '';
}
function clearTextAmountField() {
    const savingField = document.getElementById('saving-amount');
    savingField.innerText = '';
    const remainBalanceField = document.getElementById('remaining-balance');
    remainBalanceField.innerText = '';
}
//functions..
function getExpenses() {
    //expenses......
    //food
    const foodInput = document.getElementById('food-input');
    const foodCost = parseFloat(foodInput.value);
    //rent
    const rentInput = document.getElementById('rent-input');
    const rentCost = parseFloat(rentInput.value);
    //clothes
    const clothesInput = document.getElementById('clothes-input');
    const clothesCost = parseFloat(clothesInput.value);
    //error handling
    if (isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost) || foodCost < 0 || rentCost < 0 || clothesCost < 0) {
        //clear text field..
        clearTextField();
        const error = getError();
        error.style.display = 'block';
        const error2 = getErrorExpenses();
        error2.style.display = 'none';
    }
    else {
        //calculating tolat expenses
        const totalIncome = getIncome();
        if (isNaN(totalIncome) || totalIncome < 0) {
            //clear text field
            clearTextField();
            const error = getError();
            error.style.display = 'block';
            const error2 = getErrorExpenses();
            error2.style.display = 'none';
        }
        else {
            const totalExpenses = foodCost + rentCost + clothesCost;
            const expensesField = document.getElementById('total-expenses');
            expensesField.innerText = totalExpenses;
            const error = getError();
            error.style.display = 'none';
            const error2 = getErrorExpenses();
            error2.style.display = 'none';
            return totalExpenses;
        }
    }
}
function getIncome() {
    const incomeInput = document.getElementById('income-input');
    const income = parseFloat(incomeInput.value);
    //error handling
    if (isNaN(income) || income < 0) {
        const error = getError();
        error.style.display = 'block';
        const error2 = getErrorExpenses();
        error2.style.display = 'none';
        //clearing text field..
        clearTextField();
    }
    else {
        return income;
    }
}
function getBalance() {
    const totalIncome = getIncome();
    const totalExpenses = getExpenses();
    //calculating balance
    if (isNaN(totalIncome) || isNaN(totalExpenses)) {
        const error = getError();
        error.style.display = 'block';
        const error2 = getErrorExpenses();
        error2.style.display = 'none';
    }
    else {
        if (totalExpenses > totalIncome) {
            const error = getError();
            error.style.display = 'none';
            const error2 = getErrorExpenses();
            error2.style.display = 'block';
            //clearing text field..
            clearTextField();
        }
        else {
            const balance = totalIncome - totalExpenses;
            const balanceField = document.getElementById('balance');
            balanceField.innerText = balance;
            //hiding error msg
            const error = getError();
            error.style.display = 'none';
            const error2 = getErrorExpenses();
            error2.style.display = 'none';
            return balance;
        }
    }
}
function getRemainingBalance() {
    //remaining balance
    //save
    const saveInput = document.getElementById('save-input');
    const save = parseFloat(saveInput.value);
    //calculating saving amount
    if (isNaN(save) || save < 0) {
        const error = getEmptyError();
        error.style.display = 'block';
        const error2 = getAmountError();
        error2.style.display = 'none';
        //clearing text field
        clearTextAmountField();
    }
    else {
        const saveIncome = getIncome();
        const savingAmount = (saveIncome * save) / 100;
        const totalBalance = getBalance();
        //calculating remaining balance
        if (savingAmount > totalBalance) {
            const error = getAmountError();
            error.style.display = 'block';
            const error2 = getEmptyError();
            error2.style.display = 'none';
            //clearing text field
            clearTextAmountField();
        }
        else {
            const remainingBalance = totalBalance - savingAmount;
            const remainingBalanced = remainingBalance.toFixed(2)
            const savingField = document.getElementById('saving-amount');
            savingField.innerText = savingAmount;
            const remainBalanceField = document.getElementById('remaining-balance');
            remainBalanceField.innerText = remainingBalanced;
            //hiding error msg
            const error = getEmptyError();
            error.style.display = 'none';
            const error2 = getAmountError();
            error2.style.display = 'none';
        }
    }
}
//Calculate button
document.getElementById('button-calculate').addEventListener('click', function () {
    const balance = getBalance();
})
//Save Button
document.getElementById('save-btn').addEventListener('click', function () {
    const remainingBalance = getRemainingBalance();
})