import EmployeeDAO from "../domain.dao/EmployeeDAO";
import Employee from "../domain/Employee";
import EmployeeReportFormatter from "../reporting/EmployeeReportFormatter";
import FormatType from "../reporting/FormatType";

function hireEmployee(employee: Employee): void {
    let employeeDAO: EmployeeDAO = new EmployeeDAO();
    employeeDAO.saveEmployee(employee);
}

function terminateEmployee(employee: Employee): void {
    //terminate
    let employeeDAO: EmployeeDAO = new EmployeeDAO();
    employeeDAO.deleteEmployee(employee);
}

function printEmployeeReport(employee: Employee, formatType: FormatType): void {
    //print
    let employeeReportFormatter: EmployeeReportFormatter = new EmployeeReportFormatter(employee, formatType);
    console.log(employeeReportFormatter.getFormattedEmployee());
}

let employee: Employee = new Employee();
hireEmployee(employee);
terminateEmployee(employee);
printEmployeeReport(employee, FormatType.CSV);