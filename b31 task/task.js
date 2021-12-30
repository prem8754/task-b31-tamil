
// task

// find the all countries that speak spanish




const getcountries = () => {
    console.log("getting countriesss ....");
    const xhr = new XMLHttpRequest ();
    xhr.open ("GET","https://restcountries.com/v3.1/all" );
    xhr.send();
    xhr.responsetype = "JSON";
    xhr.onload = () => {
        const countries = xhr.response;
        const countrynames = countries.map((country) => country.name.common);
        const spanishcountries = counties.filter((country) => country.language.spanish);
        console.log("Full data",countries,spanishcountry);
        console.log("Full data",countries,countrynames);
        
    };
};

getcountries();



// task
// print the deposite amount



class Account {
    constructor (name,accountnumber,balance){
        this.name = name;
        this.accountnumber = accountnumber;
        this.balance = balance;
       
    }
        getbalance (){
        return`this balance is:₹${this.balance}`;  
    }

    withdraw (amount){
        if (this.balance>= amount){
            this.balance = this.balance - amount;
            console.log("reduce balance", this.name,this.balance);
            return this.getbalance ();
        } else {
            return `insufficient balance. ${this.getbalance()}`
        }

    }
        deposite (amount){
                this.balance = this.balance + amount;
                return this.getbalance();
            }

}

const prem = new Account("prem",32215674,1000000000);
console.log(prem.withdraw(15000000));
console.log(prem.deposite(7500000089));
console.log(prem.getbalance());
