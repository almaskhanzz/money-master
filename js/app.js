//function
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
    //calculating tolat expenses
    const totalExpenses = foodCost + rentCost + clothesCost;
    const expensesField = document.getElementById('total-expenses');
    expensesField.innerText = totalExpenses;

    //clearing input field..
    // foodInput.value = '';
    // rentInput.value = '';
    // clothesInput.value = '';
    return totalExpenses;
}
function getIncome() {
    const incomeInput = document.getElementById('income-input');
    const income = parseFloat(incomeInput.value);
    // //clearing input field
    // incomeInput.value = '';
    return income;
}
function getBalance() {
    //income
    const totalIncome = getIncome();
    //calculating balance
    const totalExpenses = getExpenses();
    const balance = totalIncome - totalExpenses;

    const balanceField = document.getElementById('balance');
    balanceField.innerText = balance;
    return balance;
}
function getSave() {
    const saveInput = document.getElementById('save-input');
    const save = parseFloat(saveInput.value);
    const saveIncome = getIncome();
    const savingAmount = (saveIncome * save) / 100;

    const savingField = document.getElementById('saving-amount');
    savingField.innerText = savingAmount;
    return savingAmount;
}
function getRemainingBalance() {
    const totalBalance = getBalance();
    const totalSavingAmount = getSave();
    const remainingBalance = totalBalance - totalSavingAmount;
    const remainBalanceField = document.getElementById('remaining-balance');
    remainBalanceField.innerText = remainingBalance;
}

//Calculate button
document.getElementById('button-calculate').addEventListener('click', function () {
    const balance = getBalance();
})
//Save Button
document.getElementById('save-btn').addEventListener('click', function () {
    const remainingBalance = getRemainingBalance();
})