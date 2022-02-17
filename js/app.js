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
    foodInput.value = '';
    rentInput.value = '';
    clothesInput.value = '';
    return totalExpenses;
}
function getBalance() {
    //income
    const incomeInput = document.getElementById('income-input');
    const income = parseFloat(incomeInput.value);
    //calculating balance
    const totalExpenses = getExpenses();
    const balance = income - totalExpenses;

    const balanceInput = document.getElementById('balance');
    balanceInput.innerText = balance;

    //clearing input field
    incomeInput.value = '';
}

//Calculate button
document.getElementById('button-calculate').addEventListener('click', function () {
    getBalance();
})
//Save Button
document.getElementById('save-btn').addEventListener('click', function () {

})