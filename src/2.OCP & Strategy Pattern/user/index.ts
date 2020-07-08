import RemoteControl from "../remotes/RemoteControl";
import TV from "../devices/TV";
import Device from "../devices/Device";
import Projector from "../devices/Projector";


let remoteControl: RemoteControl = RemoteControl.getInstance();
let tv: TV = new TV(); 
remoteControl.connectDevice(tv);
remoteControl.turnOnDevice();
remoteControl.turnOffDevice();

let projector: Projector = new Projector();
remoteControl.connectDevice(projector);
remoteControl.turnOnDevice();
remoteControl.turnOffDevice();