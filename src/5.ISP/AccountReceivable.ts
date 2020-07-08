import Accounting from "./Accounting";

export default class AccountReceivable {
    private txObj: Accounting;

    constructor(txobj: Accounting) {
        this.txObj = txobj;
    }

    /**
     * postPayment
     */
    public postPayment() {
        this.txObj.chargeCustomer()
    }

    /**
     * sendInvoice
     */
    public sendInvoice() {
        this.txObj.prepareInvoice();
        //send invoice
    }
}