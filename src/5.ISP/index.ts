import AccountReceivable from "./AccountReceivable";
import Accounting from "./Accounting";
import CustomerTransaction from "./CustomerTransaction";
import Customer from "./Customer";
import Product from "./Product";
import ReportGenerator from "./ReportGenerator";
import Reporting from "./Reporting";


let customer = new Customer();
customer.name = "Pinesh";

let product = new Product();
product.productId = 1;
product.productName = "Apple iPhone 8+";

let list: Array<Product> = [product];
let txObj: CustomerTransaction = new CustomerTransaction(customer, list);

let receivable: AccountReceivable = new AccountReceivable(txObj);
receivable.postPayment();
receivable.sendInvoice();

let reportGenerator: ReportGenerator = new ReportGenerator(txObj); 
reportGenerator.generateReport();
