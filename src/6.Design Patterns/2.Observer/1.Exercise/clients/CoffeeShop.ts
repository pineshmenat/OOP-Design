import WaitingCustomer from "../customers/WaitingCustomer";
import Customer from "../customers/Customer";
import CoffeeAtendent from "../coffeeshop/CoffeeAttendent";

let vaishnavi = new Customer("Vaishnavi", "Virgin Mojito");
let pinesh = new Customer("Pinesh", "Dark Roast Coffee");

let robert = new CoffeeAtendent();

robert.takeOrder(vaishnavi);
robert.takeOrder(pinesh);

robert.prepareOrder("Virgin Mojito");
robert.prepareOrder("Dark Roast Coffee");

robert.callOutCompletedOrder();
