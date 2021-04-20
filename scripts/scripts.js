'use strict';

let
reset = document.getElementById('cancel'),
start = document.getElementById('start'),
btnPlus = document.getElementsByTagName('button'),
incomePlus = btnPlus [0],
expensesPlus = btnPlus[1],
additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
depositCheck = document.querySelector('#deposit-check'),
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
expensesItems = document.querySelectorAll('.expenses-items'),
additionalExpenses = document.querySelector('.additional_expenses'),
periodSelect = document.querySelector('.period-select'),
additionalExpensesItem = document.querySelector('.additional_expenses-item'),
incomeItems = document.querySelectorAll('.income-items'),
periodAmount = document.querySelector('.period-amount'),
inputTypeText = document.querySelectorAll('input[type=text]'),
targetAmount = document.querySelector('.target-amount');


const AppData = function(){
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


};
const appData = new AppData();


AppData.prototype.start = function (){
  this.getExpenses();
  this.getIncome();
  this.getExpensesMonth();
  this.getAddExpenses();
  this.getAddIncome();
  this.getBudget();
  this.showResult();
  this.disInputs();
start.style.display = 'none';  
reset.style.display = 'block';
 }; 


AppData.prototype.reset = function () {
             
  for (let i = incomeItems.length; i > 1; i--) {
        incomeItems[i - 1].remove();
    }
  for (let i = expensesItems.length; i > 1; i--) {
        expensesItems[i - 1].remove();
    }
    periodSelect.value = 1;
    periodAmount.innerHTML = periodSelect.value;
    inputTypeText.forEach(function(item) {
      item.value = '';
     
    });
    this.disInputs(true);
    this.getsalaryAmount();
      reset.style.display = 'none';
      start.style.display = 'block';  
    };
    
    AppData.prototype.disInputs = function (disabled) {
    inputTypeText.forEach(function(item) {
      if (!disabled) { 
      item.disabled = true;
      } else {item.disabled = false;
      }
    });
};

AppData.prototype.showResult =  function () {
  const _this = this;
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  additionalExpensesValue.value = this.addExpenses.join(', ');
  expensesMonthValue.value = this.expensesMonth;
  additionalIncomeValue.value = this.addIncome.join(',');
  targetMonthValue.value = this.getTargetMonth();
  incomePeriodValue.value = this.calcPeriod(); 
  budgetDayValue.value = Math.ceil(this.getBudget());
  periodSelect.addEventListener('input', function() {
  incomePeriodValue.value = _this.calcPeriod();
  });
};

AppData.prototype.addIncomeBlock = function(){
  let cloneincomeItems = incomeItems[0].cloneNode(true);
  incomeItems[0].parentNode.insertBefore(cloneincomeItems,incomePlus);
  incomeItems = document.querySelectorAll('.income-items');           
    if(incomeItems.length === 3){
      incomePlus.style.display = 'none';
}
};

AppData.prototype.addExpensesBlock =  function(){
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem,expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');           
      if(expensesItems.length === 3){
  expensesPlus.style.display = 'none';
}
};

AppData.prototype.getIncome = function (){
  const _this = this;
  incomeItems.forEach(function(item){
      let    itemIncomeItems = item.querySelector('.income-title').value;
      let    cashIncome = item.querySelector('.income-amount').value; 
        if (itemIncomeItems !== '' &&  cashIncome !==0 ) {
          _this.income[itemIncomeItems] =  +cashIncome;
         }    
  });
    for (let key in _this.income){
      this.incomeMonth +=this.income[key];
  }
};

AppData.prototype.getExpenses =  function(){
  const _this = this;
  expensesItems.forEach(function(item){
  let  itemExpensesItems = item.querySelector('.expenses-title').value;
  let  cashExpenses = item.querySelector('.expenses-amount').value; 
    if (itemExpensesItems !== '' && cashExpenses !==0 ) {
      _this.expenses[itemExpensesItems] = cashExpenses;
    }    
});
};
AppData.prototype.getExpensesMonth = function() {
      let sum = 0;
  for (let key in appData.expenses) {
      sum += +appData.expenses[key];
  }
     appData.expensesMonth = sum;
  return sum;    
};

AppData.prototype.getTargetMonth =  function(){
  return Math.ceil(targetAmount.value/this.budgetMonth);    
}; 

AppData.prototype.getStatusIncome = function (budgetDay){
if ( budgetDay >= 1200 ) {
return ('У вас высокий уровень дохода');
}  else if (budgetDay >= 600 && budgetDay < 1200) {
return ('У вас средний уровень дохода');
}  else if (budgetDay < 600 && budgetDay >= 0 ) {
return ('К сожалению у вас уровень дохода ниже среднего');
}  else {
return ('Что то пошло не так');
}
};

AppData.prototype.getBudget = function (){
    this.budget = +salaryAmount.value;  
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;
return this.budgetMonth, this.budgetDay;
};

 AppData.prototype.getAddExpenses =  function(){
  const _this = this; 
  let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item) {
        item = item.trim();  
      if (item !== ''){
        _this.addExpenses.push(item);
}});
};

AppData.prototype.getAddIncome = function(){
  const _this = this;  
  additionalIncomeItem.forEach(function(item){
let itemValue = item.value.trim();
if ( itemValue!==''){
  _this.addIncome.push(itemValue);
}});
};

AppData.prototype.getsalaryAmount = function(){
if (salaryAmount.value.trim() == 0){
    start.disabled = true;
}else {start.disabled = false; 
}
};
AppData.prototype.getperiodSelect = function(){
periodAmount.innerHTML= periodSelect.value;
};

AppData.prototype.isNumber = function(n)
        {return !isNaN(parseFloat(n)) && isFinite(n);
};

AppData.prototype.getInfoDeposit = function(){
if (this.deposit){
do { 
this.percentDeposit = +prompt('Какой годовой процент?','10');
}    while ( !this.isNumber(this.percentDeposit)); 

do { 
  appData.moneyDeposit = prompt('Какая сумма заложена ?', 10000);
  } while ( !this.isNumber(this.moneyDeposit)); 
}
};

AppData.prototype.calcPeriod = function(){
  return this.budgetMonth * periodSelect.value;
};  

AppData.prototype.eventsListeners = function(){
  appData.getsalaryAmount();
  salaryAmount.addEventListener('input',this.getsalaryAmount);
  start.addEventListener('click',this.start.bind(appData) );
  reset.addEventListener('click',this.reset.bind(appData) );
  expensesPlus.addEventListener('click',this.addExpensesBlock);
  incomePlus.addEventListener('click',this.addIncomeBlock);
  periodSelect.addEventListener('input',this.getperiodSelect);

};

appData.eventsListeners();
     
 