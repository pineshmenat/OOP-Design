package reporting;

import reporting.FormatType;

public class ReportFormatter {

    private String formattedVal;

    ReportFormatter(Object obj, FormatType formatType) {
        switch (formatType) {
            case CSV: formattedVal = convertObjectToCSV(obj);
                        break;
            case XML: formattedVal = convertObjectToXML(obj);
                        break;
        }
    }
    private String convertObjectToXML(Object object) {
        return "XML + " + object.toString();
    }
    private String convertObjectToCSV(Object object) {
        System.out.println("Convert to CSV");
        return "CSV : " + object.toString();
    }

    public String getFormattedValue() {
        return formattedVal;
    }
}
