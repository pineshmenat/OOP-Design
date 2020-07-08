import FormatType from './FormatType';

export default class ReportFormatter {
    private formattedOutput: string

    constructor(object: Object, formattype: FormatType) {
        if(formattype === FormatType.XML) {
            this.formattedOutput = this.convertObjectToXML(object);
        } else if (formattype === FormatType.CSV) {
            this.formattedOutput = this.convertObjectToCSV(object);
        }
    }

    protected convertObjectToXML(object: object) : string {
        return "XML: " +object.toString();
    }
    
    protected convertObjectToCSV(object: object) : string {
        return "CSV: " +object.toString();
    }
    
    protected getFormattedValue() : string {
        return this.formattedOutput;
    }
}