const accountId = 133453
let accountEmail = "tejas@gmail.com"
var accountPassword = '12345'
accountCity = "Amravati"
let accountState;

// account_id = 2
accountEmail = "tk@email.com"
accountPassword = "123332"
accountCity = "pune"

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

// console.log(account_id);

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);