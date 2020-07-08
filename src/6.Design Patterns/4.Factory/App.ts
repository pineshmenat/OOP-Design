import VehicleFactory from "./VehicleFactory";
import VehicleType from "./VehicleType";
import Vehicle from "./Vehicle";

let vehicleFactory = new VehicleFactory();
let car: Vehicle = vehicleFactory.getVehicle(VehicleType.ELECTRICCAR);

car.startEngine();
