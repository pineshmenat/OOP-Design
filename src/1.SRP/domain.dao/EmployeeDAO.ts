import DatabaseConnectionManager from "../detabase/DatabaseConnectionManager";
import Employee from "../domain/Employee";

export default class EmployeeDAO {
    connectionManager = DatabaseConnectionManager.getManagerInstance();

    public saveEmployee(employee: Employee): void {
        this.connectionManager.connect();
        console.log("Employee Record saved")
        this.connectionManager.disconnect();
    }

    public deleteEmployee(employee: Employee): void {
        this.connectionManager.connect();
        console.log("Employee Terminated");
        this.connectionManager.disconnect();
    }
}