import Device from "../devices/Device";

export default class RemoteControl {
    private static instance: RemoteControl
    private device: Device

    private constructor() {}

    /**
     * Singleton, getInstance
     */
    public static getInstance(): RemoteControl {
        return this.instance || (this.instance = new this())
    }

    /**
     * connectDevice
     */
    public connectDevice(device: Device) {
        this.device = device;
        console.log("Connected to device: " + this.device);
    }

    /**
     * turnOnDevice
     */
    public turnOnDevice() {
        this.device.turnOn();
    }

    /**
     * turnOffDevice
     */
    public turnOffDevice() {
        this.device.turnOff();
    }
}