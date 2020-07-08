import Vehicle from "./Vehicle";

export default class Truck implements Vehicle{
    startEngine() {
        console.log("Truck: Engine start");
    }
}