export default class Employee {
    public _name: string
    private _hireDate: Date
    private _salary: number
    public _employeeID: number
    private _working: boolean

    private static count: number = 0;

    constructor(name: string, hireDate: Date, salary: number, working: boolean) {
        this._name = name;
        this._hireDate = hireDate;
        this._salary = salary;
        this._working = working;

        this._employeeID = Employee.count++;
    }

    /**
     * toString
     */
    public toString() {
        return "Employee [name: " + this._name + ", hireDate: " + this._hireDate + ", working: " + this._working + "]";
    }
}