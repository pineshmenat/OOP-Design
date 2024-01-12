package reporting;

import domain.Employee;

public class EmployeeReportFormatter extends ReportFormatter {

    public EmployeeReportFormatter(FormatType formatType, Employee anEmployee) {
        super(anEmployee, formatType);
    }
    public String getFormattedEmployee() {
        return this.getFormattedValue();
    }

}
