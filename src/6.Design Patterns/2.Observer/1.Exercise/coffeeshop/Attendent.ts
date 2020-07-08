import WaitingCustomer from "../customers/WaitingCustomer";

export default interface Attendent {
    takeOrder(customer: WaitingCustomer);
    prepareOrder(name: string, drinkToPrepare: string);
    callOutCompletedOrder(name: string);
}