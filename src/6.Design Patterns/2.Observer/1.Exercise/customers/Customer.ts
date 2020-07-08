import WaitingCustomer from "./WaitingCustomer";

export default class Customer implements WaitingCustomer {
    name: string
    drinkOrdered: string

    constructor(name: string, drink: string) {
        this.name = name;
        this.drinkOrdered = drink;
    }

    orderReady(prepareDrink: string) {
        if(this.drinkOrdered === prepareDrink)
            console.log("Thank you for " + prepareDrink+ ". I'll leave now..");
        else console.log(this.name + ": Sorry it's not mine")
    }

}