package domain.dao;

import domain.Employee;

import java.sql.SQLException;

public class EmployeeDAO {
    public void saveEmployee(Employee emp) throws SQLException {
//        database.DatabaseConnectionManager connectionManager = database.DatabaseConnectionManager.getManagerInstance();
//        connectionManager.connect();
//        connectionManager.getConnectionObject().prepareStatement("INSERT INTO employee where ");
//        connectionManager.disconnect();
        System.out.println("Saved to DB..");
    }
    public void deleteEmployee(Employee emp) throws SQLException {
//        database.DatabaseConnectionManager connectionManager = database.DatabaseConnectionManager.getManagerInstance();
//        connectionManager.connect();
//        connectionManager.getConnectionObject().prepareStatement("DELETE FROM employee where ");
        System.out.println("Deleted from DB..");
    }
}
