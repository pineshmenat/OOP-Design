import Accounting from "./Accounting";
import Reporting from "./Reporting";
import Customer from "./Customer";
import Product from "./Product";

export default class CustomerTransaction implements Accounting, Reporting {
    private customer: Customer;
    private productList: Array<Product>;

    constructor(customer: Customer, list: Array<Product>) {
        this.customer = customer;
        this.productList = list;
    }

    prepareInvoice() {
        console.log("Invoice prepared");
    }
    chargeCustomer() {
        console.log("customer charged");
    }
    getName() {
        return this.customer.name;
    }
    getDate() {
        return new Date(0);
    }
    getProductBreakdown() {
        let listString: string;
        this.productList.forEach(product => {
            listString += product.productName;
        });
        return listString;
    }
    
}