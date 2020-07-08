import IObserver from "../observers/IObserver";
import PayrollDepartment from "../observers/PayrollDepartment";
import HRDepartment from "../observers/HRDepartment";
import EmployeeManagementSystem from "../subjects/EmployeeManagementSystem";
import Employee from "../domain/Employee";

let payroll: IObserver = new PayrollDepartment();
let hrSystem: IObserver = new HRDepartment();

let ems: EmployeeManagementSystem = new EmployeeManagementSystem();
ems.registerObserver(payroll);
ems.registerObserver(hrSystem);

let emp1 = new Employee("Vaishnavi", new Date(), 100000, false);
ems.hireNewEmployee(emp1);

ems.modifyEmployeeName(6, "Monish");
ems.modifyEmployeeName(5, "Mittal");
