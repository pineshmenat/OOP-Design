import Vehicle from "./Vehicle";

export default class Car implements Vehicle{
    startEngine() {
        console.log("Car: Engine start");
    }
}