import Device from "./Device";

export default class Projector implements Device{
    turnOn(): void {
        console.log("Turned On Projector");
    }
    turnOff(): void {
        console.log("Turned Off Projector");
    }

    toString(): string {
        return "Projector";
    }

    //some additional methods for Projector
}