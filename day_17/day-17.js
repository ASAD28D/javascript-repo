// EXERCISE 17 

// Q1 : Store you first name, last name, age, country, city in your browser localStorage.

localStorage.setItem('firstname', 'asad')
localStorage.setItem('lastname', 'laiq')
localStorage.setItem('age', 18)
localStorage.setItem('country', 'pakistan')
localStorage.setItem('city', 'lahore')
console.log(localStorage)

//========================================================================================================

// Q2 : Create a student object. The student object will have first name, last name, age, skills,
// country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

let student = {
    firstname: 'asad',
    lastname: 'laiq',
    age: 18,
    skills: ['html', 'css', 'javascript', 'wordpress'],
    country: 'pakistan'
}

let studentJson = JSON.stringify(student);
localStorage.setItem('student', studentJson);
console.log(localStorage);

//========================================================================================================

// Q3 : Create an object called personAccount. It has firstname, lastname, incomes, expenses properties 
// and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
// Incomes is a set of incomes and its description and expenses is also a set of
// expenses and its description.

const personAccount = {
    firstname: 'asad',
    lastname: 'laiq',
    incomes: [15000, 20000, 22000],
    expenses: [10000, 20000],
    totalIncome() {
        let sumIncome = 0;
        for (let income of this.incomes) {
            sumIncome += income
        }
        return parseInt(sumIncome)
    },
    totalExpense() {
        let sumexpense = 0;
        for (let expense of this.expenses) {
            sumexpense += expense
        }
        return parseInt(sumexpense)
    },
    accountInfo() {
        return `first name : ${this.firstname}\nlast name : ${this.lastname}\ntotal income : ${this.totalIncome()}\naccount balance : ${this.totalIncome()}`
    },
    addIncome(income) {
        this.incomes.push(income)
        return this.incomes
    },
    addexpenses(expence) {
        this.expenses.push(expence)
        return this.expenses
    },
    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }
}
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
console.log(personAccount.addIncome(5000));
console.log(personAccount.addexpenses(5000));
console.log(personAccount.accountBalance());

//========================================================================================================

