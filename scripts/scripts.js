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

    console.log(reset);
    console.log(start);
    console.log(inputTypeText);
    console.log(expensesPlus);
    console.log(salaryAmount.value);    
      
    const isNumber = function(n)
        {return !isNaN(parseFloat(n)) && isFinite(n);
};
    let appData = {
        income: {},
        incomeMonth:0,
        addIncome: [],
        expenses: {},
        addExpenses: [],
        percentDeposit: 0,
        moneyDeposit: 0,
        deposit: false,
        budget: 0,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,
        start:function (){
         
          this.getExpenses();
            this.getIncome();
            this.getExpensesMonth();
            this.getAddExpenses();
            this.getAddIncome();
            this.getBudget();
            this.showResult();
            start.style.display = 'none';  
            reset.style.display = 'block';
           },
           reset: function () {
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
              reset.style.display = 'none';
              start.style.display = 'block';  
              this.disInputs(true);
              this.getsalaryAmount();
              
           
            },
            
            disInputs: function (disabled) {
                   inputTypeText.forEach(function(item) {
                if (!disabled) { 
                item.disabled = true;
                } else {item.disabled = false;
                }
              });
          },
        showResult: function () {
            budgetMonthValue.value = this.budgetMonth;
            budgetDayValue.value = this.budgetDay;
            additionalExpensesValue.value = this.addExpenses.join(', ');
            expensesMonthValue.value = this.expensesMonth;
            additionalIncomeValue.value = this.addIncome.join(',');
            targetMonthValue.value = this.getTargetMonth();
            incomePeriodValue.value = this.calcPeriod(); 
            budgetDayValue.value = Math.ceil(this.getBudget());
            periodSelect.addEventListener('input', function() {
            incomePeriodValue.value = appData.calcPeriod();
             
                     });
        },
        addIncomeBlock:function(){
            let cloneincomeItems = incomeItems[0].cloneNode(true);
            incomeItems[0].parentNode.insertBefore(cloneincomeItems,incomePlus);
            incomeItems = document.querySelectorAll('.income-items');           
              if(incomeItems.length === 3){
                incomePlus.style.display = 'none';
        }
    },
        addExpensesBlock: function(){
              let cloneExpensesItem = expensesItems[0].cloneNode(true);
                expensesItems[0].parentNode.insertBefore(cloneExpensesItem,expensesPlus);
                expensesItems = document.querySelectorAll('.expenses-items');           
                if(expensesItems.length === 3){
            expensesPlus.style.display = 'none';
          }
        },
        getIncome: function (){
          incomeItems.forEach(function(item){
                let    itemIncomeItems = item.querySelector('.income-title').value;
                let    cashIncome = item.querySelector('.income-amount').value; 
                  if (itemIncomeItems !== '' &&  cashIncome !==0 ) {
                      appData.income[itemIncomeItems] =  +cashIncome;
                   }    
            });
              for (let key in appData.income){
                appData.incomeMonth +=appData.income[key];
            }
        },
        getExpenses: function(){
          expensesItems.forEach(function(item){
            let    itemExpensesItems = item.querySelector('.expenses-title').value;
            let    cashExpenses = item.querySelector('.expenses-amount').value; 
              if (itemExpensesItems !== '' && cashExpenses !==0 ) {
                appData.expenses[itemExpensesItems] = cashExpenses;
              }    
        });
        },
        getExpensesMonth: function() {
                let sum = 0;
            for (let key in appData.expenses) {
                sum += +appData.expenses[key];
            }
               appData.expensesMonth = sum;
            return sum;    
       },
        getTargetMonth: function(){
            return Math.ceil(targetAmount.value/this.budgetMonth);    
              }, 
        getStatusIncome: function (budgetDay){
        if ( budgetDay >= 1200 ) {
          return ('У вас высокий уровень дохода');
     }  else if (budgetDay >= 600 && budgetDay < 1200) {
          return ('У вас средний уровень дохода');
     }  else if (budgetDay < 600 && budgetDay >= 0 ) {
          return ('К сожалению у вас уровень дохода ниже среднего');
     }  else {
         return ('Что то пошло не так');
     }
     },
    getBudget: function (){
      appData.budget = +salaryAmount.value;  
      appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
        return appData.budgetMonth, appData.budgetDay;
        
    },
    getAddExpenses: function(){
      let addExpenses = additionalExpensesItem.value.split(',');
      addExpenses.forEach(function(item) {
        item = item.trim();  
        if (item !== ''){
          appData.addExpenses.push(item);
          }
      } 
      );
      
    },
    getAddIncome: function(){
  additionalIncomeItem.forEach(function(item){
       let itemValue = item.value.trim();
       if ( itemValue!==''){
        appData.addIncome.push(itemValue);
      }
  });
  },
  getsalaryAmount:function(){
    if (salaryAmount.value.trim() == 0){
    start.disabled = true;
    }else {start.disabled = false; 
    }
  },
    getperiodSelect:function(){
      periodAmount.innerHTML= periodSelect.value;
    },
    getInfoDeposit: function(){
    if (appData.deposit){
        do { 
        appData.percentDeposit = +prompt('Какой годовой процент?','10');
        }    while ( !isNumber(this.percentDeposit)); 
    
        do { 
            appData.moneyDeposit = prompt('Какая сумма заложена ?', 10000);
            } while ( !isNumber(this.moneyDeposit)); 
    }
    },
    
    calcPeriod: function(){
        return this.budgetMonth * periodSelect.value;
    }  
};
const startNew = appData.start.bind(appData); 
appData.getsalaryAmount();
salaryAmount.addEventListener('input',appData.getsalaryAmount);
start.addEventListener('click',startNew);
reset.addEventListener('click',appData.reset);
expensesPlus.addEventListener('click',appData.addExpensesBlock);
incomePlus.addEventListener('click',appData.addIncomeBlock);
periodSelect.addEventListener('input',appData.getperiodSelect);



