import Vehicle from "./Vehicle";
import SmallEngine from "./SmallEngine";


let raceCar: Vehicle = new Vehicle(new SmallEngine(100));
raceCar.crankIgnition();