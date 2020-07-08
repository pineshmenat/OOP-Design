import Vehicle from "./Vehicle";

export default class ElectricCar implements Vehicle{
    startEngine() {
        console.log("ElectricCar: Engine start");
    }
}