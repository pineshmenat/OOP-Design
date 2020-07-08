import Engine from "./Engine";

export default class Vehicle {
    private _anEngine: Engine

    constructor(anEngine: Engine) {
        this._anEngine = anEngine;
    }

    /**
     * crankIgnition
     */
    public crankIgnition() {
        this._anEngine.startEngine();
        console.log("Vehicle is running");
    }

}