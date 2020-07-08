import Device from "./Device";

export default class TV implements Device{
    turnOn(): void {
        console.log("Turned On");
    }
    turnOff(): void {
        console.log("Turned Off");
    }

    toString(): string {
        return "TV";
    }

    //some additional methods for TV
}