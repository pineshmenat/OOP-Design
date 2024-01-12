package clients;

import domain.Employee;
import domain.dao.EmployeeDAO;
import reporting.EmployeeReportFormatter;
import reporting.FormatType;

import java.sql.SQLException;

public class ClientModule {
    public static void main(String[] args) throws SQLException {
        Employee emp = new Employee(1, "Pinesh M", "Tech", true);
        ClientModule.hireNewEmployee(emp);
        ClientModule.terminateEmployee(emp);
        ClientModule.printEmployeeReport(emp, FormatType.CSV);

    }

    public static void hireNewEmployee(Employee employee) throws SQLException {
        EmployeeDAO edao = new EmployeeDAO();
        edao.saveEmployee(employee);
    }

    public static void terminateEmployee(Employee employee) throws SQLException {
        EmployeeDAO edao = new EmployeeDAO();
        edao.deleteEmployee(employee);
    }

    public static void printEmployeeReport(Employee employee, FormatType formatType) {
        EmployeeReportFormatter erf = new EmployeeReportFormatter(formatType, employee);
        System.out.println(erf.getFormattedEmployee());
    }


}