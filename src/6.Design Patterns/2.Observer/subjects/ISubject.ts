import IObserver from "../observers/IObserver";

export default interface ISubject {
    registerObserver(observer: IObserver);
    removeObserver(observer: IObserver);
    notifyObservers(notification: string);
}