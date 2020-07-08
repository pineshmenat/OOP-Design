import VehicleType from "./VehicleType";
import Car from "./Car";
import Truck from "./Truck";
import ElectricCar from "./ElectricCar";
import Vehicle from "./Vehicle";

export default class VehicleFactory{
    getVehicle(vehicletype: VehicleType): Vehicle {
        if(vehicletype === VehicleType.CAR) return new Car();
        if(vehicletype === VehicleType.TRUCK) return new Truck();
        if(vehicletype === VehicleType.ELECTRICCAR) return new ElectricCar();
        return null;
    }
}