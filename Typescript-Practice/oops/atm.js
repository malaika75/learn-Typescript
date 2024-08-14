var bankAccount = /** @class */ (function () {
    function bankAccount(balance, accountHolder) {
        this.balance = balance;
        this.accountHolder = accountHolder;
    }
    bankAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("withdraw succsessfull ".concat(this.balance));
        }
        else {
            console.log("insuficient balance");
        }
    };
    bankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("amount ".concat(this.balance, " deposited in your account"));
        }
        else {
            console.log("invalid amount");
        }
    };
    bankAccount.prototype.getbalance = function () {
        return this.balance;
    };
    return bankAccount;
}());
var credit = new bankAccount(50000, "malaika");
console.log(credit);
credit.withdraw(10000);
credit.deposit(20000);
console.log(credit.getbalance());
credit.withdraw(7000000);
