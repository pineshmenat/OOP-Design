import Accounting from "./Accounting";
import Reporting from "./Reporting";

export default class ReportGenerator {
    private txObj: Reporting;

    constructor(txobj: Reporting) {
        this.txObj = txobj;
    }

    /**
     * generateReport
     */
    public generateReport() {
        console.log(this.txObj.getName() + this.txObj.getDate() + this.txObj.getProductBreakdown())
    }
}