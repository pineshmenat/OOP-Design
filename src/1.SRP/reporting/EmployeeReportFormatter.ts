import Employee from "../domain/Employee";
import ReportFormatter from "./ReportFormatter";
import FormatType from "./FormatType";

/**
 * Why 2 different classes for ReportFormatter
 * If EmployeeReportFormatter gathered info and printed the report then it would do two things. If another object needed to print a formatted report, 
 * say a ReceiptReportFormatter, then you would have to gather info and tell it how to write a report formatter for that object as well. 
 * The ReceiptReportFormatter would also do things and the same would go for any other report that needed to be printed. 
 * Leading to code that is not DRY.
 * 
 * The EmployeeReportFormatter should only do one thing. That one thing is get an employee object and the type of report to be printed. 
 * The ReportFormatter should only do one thing. That one thing is printing the report. Does not matter the info being passed to it so long as it is 
 * told what type of report and has an object to print. This ReportFormatter can be called on any type. Now if I needed a ReceiptReportFormatter, 
 * I no longer have to worry about coding up another report format for the receipt. It is already taken care of by the ReportFormatter. 
 * ReceiptReportFormatter just needs the receipt object and what type of report and just pass it along to the ReportFormatter.
 */

export default class EmployeeReportFormatter extends ReportFormatter {

    constructor(employee: Employee, formatType: FormatType) {
        super(employee, formatType);
    }

    getFormattedEmployee(): string {
        return this.getFormattedValue();
    }
}