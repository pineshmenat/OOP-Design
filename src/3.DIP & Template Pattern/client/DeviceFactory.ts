import SmartPhoneManufacturingProcess from "../processes/SmartPhoneManufacturingProcess";
import LaptopManufacturingProcess from "../processes/LaptopManufacturingProcess";
import GeneralManufacturingProcess from "../processes/GeneralManufacturingProcess";

let smartphoneManProcess: GeneralManufacturingProcess = new SmartPhoneManufacturingProcess("Apple");
let laptopManuProcess: GeneralManufacturingProcess = new LaptopManufacturingProcess("Lenovo");

smartphoneManProcess.launchProcess();
laptopManuProcess.launchProcess();
