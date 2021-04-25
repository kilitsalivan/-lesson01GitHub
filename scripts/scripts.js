'use strict';
const
  reset = document.getElementById('cancel'),
  start = document.getElementById('start'),
  btnPlus = document.getElementsByTagName('button'),
  incomePlus = btnPlus [0],
  expensesPlus = btnPlus[1],
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
  depositCheck = document.getElementById('deposit-check'),
  budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
  budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
  expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
  accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
  additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
  additionalExpensesValue =  document.getElementsByClassName('additional_expenses-value')[0],
  incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
  targetMonthValue = document.getElementsByClassName('target_month-value')[0],
  salaryAmount = document.querySelector ('.salary-amount'),    
  incomeTitle = document.querySelector('.income-title'),
  expensesTitle = document.querySelector('.expenses-title'),
  additionalExpenses = document.querySelector('.additional_expenses'),
  periodSelect = document.querySelector('.period-select'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  periodAmount = document.querySelector('.period-amount'),
  inputTypeText = document.querySelectorAll('input[type=text]'),
  plus = document.querySelectorAll('.btn_plus'),
  depositBank = document.querySelector('.deposit-bank'),
  depositAmount = document.querySelector('.deposit-amount'),
  depositPercent = document.querySelector('.deposit-percent'),
  targetAmount = document.querySelector('.target-amount');
  
let incomeItems = document.querySelectorAll('.income-items');
let expensesItems = document.querySelectorAll('.expenses-items');

class AppData {
    constructor(){
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.percentDeposit= 0;
  this.moneyDeposit = 0;
  this.deposit = false;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
}
start (){
  this.blockInputText();  
  this.getExpInk();
  this.getExpensesMonth();
  this.getAddExpenses();
  this.getAddIncome();
  this.getInfoDeposit();
  this.getDisableDepositAmount();
  this.otherDeposit ();
  this.getBudget();
  this.showResult();
  this.disInputs();
  this.disPlus();
 } 
reset () {
  incomePlus.style.display = 'block';
  expensesPlus.style.display = 'block';         
  for (let i = incomeItems.length; i > 1; i--) {
        incomeItems[i - 1].remove();
    }
  for (let i = expensesItems.length; i > 1; i--) {
        expensesItems[i - 1].remove();
    }
    periodSelect.value = 1;
    periodAmount.innerHTML = periodSelect.value;
    inputTypeText.forEach((item) => {
      item.value = '';
    });
    this.disInputs(true);
    this.disPlus(true);
    this.getsalaryAmount();
      reset.style.display = 'none';
      start.style.display = 'block';
      depositCheck.checked = false;
      this.depositHandler();

          this.income = {};
          this.incomeMonth = 0;
          this.addIncome = [];
          this.expenses = {};
          this.addExpenses =  [];
          this.percentDeposit = 0;
          this.moneyDeposit = 0;
          this.deposit = false;
          this.budget = 0;
          this.budgetDay = 0;
          this.budgetMonth = 0;
          this.expensesMonth = 0;  
    }
    
blockInputText () {
      let inpitText = document.querySelectorAll('[type="text"]:not(.result-total)');
      inpitText.forEach(element => {
          element.disabled = true;
      });
      start.style.display = 'none';  
      reset.style.display = 'block';
  }
  
  disPlus (disabled) {
    plus.forEach(function(item) {
      if (!disabled) { 
      item.disabled = true;
      } else {item.disabled = false;
      }
    });
  }

   disInputs (disabled) {
      inputTypeText.forEach(function(item) {
      if (!disabled) { 
      item.disabled = true;
      } else {item.disabled = false;
      }
    });
}

showResult ()  {
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  additionalExpensesValue.value = this.addExpenses.join(', ');
  expensesMonthValue.value = this.expensesMonth;
  additionalIncomeValue.value = this.addIncome.join(',');
  targetMonthValue.value = this.getTargetMonth();
  incomePeriodValue.value = this.calcPeriod(); 
  periodSelect.addEventListener('input', () => {
  incomePeriodValue.value = this.calcPeriod();
  });
}
addIncomeBlock (){
  let cloneincomeItems = incomeItems[0].cloneNode(true);
  incomeItems[0].parentNode.insertBefore(cloneincomeItems,incomePlus);
  incomeItems = document.querySelectorAll('.income-items');           
    if(incomeItems.length === 3){
      incomePlus.style.display = 'none';
}
}

addExpensesBlock (){
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem,expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');           
      if(expensesItems.length === 3){
  expensesPlus.style.display = 'none';
}
}

getExpInk () {

  const count = item => {
    const startStr = item.className.split('-')[0];
    const itemTitle = item.querySelector(`.${startStr}-title`).value;
    const itemAmount = item.querySelector(`.${startStr}-amount`).value;
 if (itemTitle !== '' &&  itemAmount !==0 ) {
  this[startStr][itemTitle] =  +itemAmount;
 }   
};
for (let key in AppData) {
  console.log('AppData[key]: ', AppData[key]);
}
incomeItems.forEach(count);
 expensesItems.forEach(count);
 for (let key in this.income){
  this.incomeMonth +=this.income[key];
}
}

getExpensesMonth () {
  this.expensesMonth = 0;
  for (let key in this.expenses) {
      this.expensesMonth += this.expenses[key];
 }return this.expensesMonth;
}
getTargetMonth (){
  return Math.ceil(targetAmount.value/this.budgetMonth);    
} 

getStatusIncome  (budgetDay){
if ( budgetDay >= 1200 ) {
return ('У вас высокий уровень дохода');
}  else if (budgetDay >= 600 && budgetDay < 1200) {
return ('У вас средний уровень дохода');
}  else if (budgetDay < 600 && budgetDay >= 0 ) {
return ('К сожалению у вас уровень дохода ниже среднего');
}  else {
return ('Что то пошло не так');
}
}

getBudget (){
  const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
  this.budget = +salaryAmount.value;
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
  this.budgetDay = Math.floor(this.budgetMonth/30);
  }
  

getAddExpenses (){
   let addExpenses = additionalExpensesItem.value.split(',');
       addExpenses.forEach((item) => {
        item = item.trim();  
        if (item !== ''){
          this.addExpenses.push(item);
}});
}
getAddIncome (){
   additionalIncomeItem.forEach((item)=>{
      let itemValue = item.value.trim();
        if ( itemValue!==''){
          this.addIncome.push(itemValue);
}});
}

getsalaryAmount (){
if (salaryAmount.value.trim() == 0){
    start.disabled = true;
} else {start.disabled = false; }
}

getDisableDepositAmount(){
   let n = depositAmount.value.trim();
    if ((isNaN(parseFloat(n)) && isFinite(n))){
    start.disabled = true; }
     else {
      start.disabled = false;
     }
}

getperiodSelect (){
periodAmount.innerHTML= periodSelect.value;
}

getInfoDeposit(){
    if (this.deposit){
  this.percentDeposit = depositPercent.value;
  this.moneyDeposit = depositAmount.value;
}
}
otherDeposit (){
if (depositPercent.value > 100 || depositPercent.value < 0){
      alert ('Введите корректное значение в поле проценты');
    } else {
      return;
    }
}

changePercent(){
    const valueSelect = this.value;
      if (valueSelect === 'other'){
          depositPercent.value ='';
          depositPercent.style.display ='inline-block';
                } else {
          depositPercent.value = valueSelect;
          depositPercent.style.display ='none';
        }
        }

depositHandler(){
  if (depositCheck.checked){
        depositBank.style.display = 'inline-block';
        depositAmount.style.display = 'inline-block';
        this.deposit = true;
        depositBank.addEventListener('change', this.changePercent);  
  } else {
    depositBank.style.display = 'none';
    depositAmount.style.display = 'none';
    depositPercent.style.display ='none';
    depositPercent.value ='';
    depositBank.value = '';
    depositAmount.value = '';
    this.deposit = false;
    depositBank.removeEventListener('change', this.changePercent); 
  }
  this.getsalaryAmount ();
}
calcPeriod (){
  return this.budgetMonth * periodSelect.value;
}  

eventsListeners (){
  this.getsalaryAmount();
  salaryAmount.addEventListener('input',this.getsalaryAmount);
  start.addEventListener('click',this.start.bind(this) );
  reset.addEventListener('click',this.reset.bind(this) );
  expensesPlus.addEventListener('click',this.addExpensesBlock);
  incomePlus.addEventListener('click',this.addIncomeBlock);
  periodSelect.addEventListener('input',this.getperiodSelect);
  depositCheck.addEventListener('change', this.depositHandler.bind(this));
  depositPercent.addEventListener('change',this.otherDeposit);
  depositAmount.addEventListener('change', this.getDisableDepositAmount);
}
}
const apData = new AppData();
apData.eventsListeners();

