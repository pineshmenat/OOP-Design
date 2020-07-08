import GeneralManufacturingProcess from "./GeneralManufacturingProcess";

export default class SmartPhoneManufacturingProcess extends GeneralManufacturingProcess{

    constructor(processName: string) {
        super(processName);
    }

    protected assembleDevice() {
        console.log("assemble smartphone.");
    }
    protected testDevice(): void {
        console.log("test smartphone.");
    }
    protected packageDevice(): void {
        console.log("package smartphone.");
    }
    protected storeDevice(): void {
        console.log("store smartphone.");
    }   
}