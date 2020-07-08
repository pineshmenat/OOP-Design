import IObserver from "./IObserver";

export default class PayrollDepartment implements IObserver{
    notify(notification: string) {
        console.log("PayrollDepartment notified..");
        console.log("PayrollDepartment " + notification);
    }

}