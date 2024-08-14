class bankAccount {
    balance:number
    accountHolder:string
    
    constructor(balance:number,accountHolder:string){
    this.balance = balance
    this.accountHolder = accountHolder
    }
    withdraw(amount:number){
    if (amount <= this.balance){
    this.balance -= amount
    console.log(`withdraw succsessfull ${this.balance}`)
    }else{
    console.log("insuficient balance")}
    }
    deposit(amount:number){
    if(amount > 0){
    this.balance += amount
    console.log(`amount ${this.balance} deposited in your account`)}
    else{
    console.log("invalid amount")}}
    getbalance(){
    return this.balance}
    }
    
    const credit = new bankAccount(50000,"malaika")
    console.log(credit)
    credit.withdraw(10000)
    credit.deposit(20000)
    console.log(credit.getbalance())
    credit.withdraw(7000000)
    
    