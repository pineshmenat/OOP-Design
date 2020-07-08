import IObserver from "./IObserver";

export default class HRDepartment implements IObserver{
    notify(notification: string) {
        console.log("HRDepartment notified..");
        console.log("HRDepartment " +notification);
    }

}