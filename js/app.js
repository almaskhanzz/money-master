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
///////////////////////////////////////////////
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

    function clearfield() {
        foodInput.value = '';
        rentInput.value = '';
        clothesInput.value = '';
    }
    //error handling
    if (isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost) || foodCost < 0 || rentCost < 0 || clothesCost < 0) {
        //clearfield();
        const error = getError();
        error.style.display = 'block';
        const error2 = getErrorExpenses();
        error2.style.display = 'none';
    }
    else {
        //calculating tolat expenses
        const totalExpenses = foodCost + rentCost + clothesCost;
        const expensesField = document.getElementById('total-expenses');
        expensesField.innerText = totalExpenses;
        const error = getError();
        error.style.display = 'none';
        const error2 = getErrorExpenses();
        error2.style.display = 'none';
        return totalExpenses;
        //clearing input field..
        //clearfield();
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
    }
    else {
        //incomeInput.value = '';
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

            const expensesField = document.getElementById('total-expenses');
            expensesField.innerText = '';


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

        const savingField = document.getElementById('saving-amount');
        savingField.innerText = '';
        const remainBalanceField = document.getElementById('remaining-balance');
        remainBalanceField.innerText = '';
    }
    else {
        const saveIncome = getIncome();
        const savingAmount = (saveIncome * save) / 100;
        const totalBalance = getBalance()
        //calculating remaining balance
        if (savingAmount > totalBalance) {
            const error = getAmountError();
            error.style.display = 'block';
            const savingField = document.getElementById('saving-amount');
            savingField.innerText = '';
            const remainBalanceField = document.getElementById('remaining-balance');
            remainBalanceField.innerText = '';
        }
        else {
            const remainingBalance = totalBalance - savingAmount;

            const savingField = document.getElementById('saving-amount');
            savingField.innerText = savingAmount;
            const remainBalanceField = document.getElementById('remaining-balance');
            remainBalanceField.innerText = remainingBalance;
            const error = getAmountError();
            error.style.display = 'none';
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