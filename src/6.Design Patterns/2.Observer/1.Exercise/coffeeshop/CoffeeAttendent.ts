import Attendent from "./Attendent";
import Customer from "../customers/Customer";

export default class CoffeeAtendent implements Attendent {
    customerList: Array<Customer>;
    completedDrinkList: Array<string>;

    constructor() {
        this.customerList = [];
        this.completedDrinkList = [];
    }
    
    
    
    takeOrder(customer: Customer) {
        this.customerList.push(customer);
        console.log("Received an order");
    }

    prepareOrder(drinkToPrepare: string) {
        this.completedDrinkList.push(drinkToPrepare);
        console.log("Preparing...");
    }

    callOutCompletedOrder() {
        console.log("Calling out..")
    this.customerList.forEach((customer) => {
        this.completedDrinkList.forEach((drink) => {
            customer.orderReady(drink);
        });
    });

    }

}