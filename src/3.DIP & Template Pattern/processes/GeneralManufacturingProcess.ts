export default abstract class GeneralManufacturingProcess {
    private processName: string

    constructor(processName: string) {
        this.processName = processName;
    }

    protected abstract assembleDevice(): void;

    protected abstract testDevice(): void;

    protected abstract packageDevice(): void;

    protected abstract storeDevice(): void;

    //template method
    public launchProcess()  {
        if(typeof this.processName !== "undefined") {
            this.assembleDevice();
            this.testDevice();
            this.packageDevice();
            this.storeDevice();
        } else {
            console.log("No process name found")
        }
    }
} 