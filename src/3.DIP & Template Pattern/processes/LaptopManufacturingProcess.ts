import GeneralManufacturingProcess from "./GeneralManufacturingProcess";

export default class LaptopManufacturingProcess extends GeneralManufacturingProcess{

    constructor(processName: string) {
        super(processName);
    }
    
    protected assembleDevice(): void {
        console.log("assemble laptop.");
    }
    protected testDevice(): void {
        console.log("test laptop.");
    }
    protected packageDevice(): void {
        console.log("package laptop.");
    }
    protected storeDevice(): void {
        console.log("store laptop.");
    }
    
} 