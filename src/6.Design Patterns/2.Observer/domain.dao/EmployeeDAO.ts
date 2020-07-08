import Employee from "../domain/Employee";

export default class EmployeeDAO {
    /**
     * generateEmployees
     */
    public generateEmployees(): Array<Employee> {
        let pinesh = new Employee("Pinesh", new Date(), 50000, false);
        let pinesha = new Employee("Pinesh a", new Date(), 50000, false);
        let pineshb = new Employee("Pinesh b", new Date(), 40000, false);
        let pineshc = new Employee("Pinesh c", new Date(), 30000, false);
        let pineshd = new Employee("Pinesh d", new Date(), 20000, false);
        let employees: Array<Employee> = [];

        employees.push(pinesh, pinesha, pineshb, pineshc, pineshd);
        return employees;
    }
}