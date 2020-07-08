import EmployeeDAO from "../domain.dao/EmployeeDAO";
import Employee from "../domain/Employee";
import IObserver from "../observers/IObserver";
import ISubject from "./ISubject";

export default class EmployeeManagementSystem implements ISubject{
    private _employeeDAO: EmployeeDAO;
    private _observerList: Array<IObserver> = [];
    employees: Array<Employee> = [];

    constructor() {
        this._employeeDAO = new EmployeeDAO();
        this._employeeDAO.generateEmployees();
        this.employees = this._employeeDAO.generateEmployees();
    }
    

    /**
     * hireNewEmployee
     */
    public hireNewEmployee(employee: Employee) {
        this.employees.push(employee);
        this.notifyObservers("new Employee("+employee._employeeID+") named: " + employee._name + " hired");
    }

    /**
     * modifyEmployeeName
     */
    public modifyEmployeeName(id: number, name: string) {
        // console.log(this.employees);
        this.employees.forEach(emp => {
            if(emp._employeeID === id) {
                emp._name = name;
                this.notifyObservers("Employee("+id+") name changed: " + name);
            }
        });
    }

    /**
     * registerObserver
     */
    public registerObserver(observer: IObserver) {
        this._observerList.push(observer);
    }

    removeObserver(anObserver: IObserver) {
        this._observerList = this._observerList.filter((observer) => observer !== anObserver);
    }
    notifyObservers(notification: string) {
        this._observerList.forEach(observer => {
            observer.notify(notification);
        });
    }
}