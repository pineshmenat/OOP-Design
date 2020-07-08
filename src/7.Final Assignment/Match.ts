export default class Match{
    private _matchObj: object = {}
    
    public get matchObj(): object {
        return this._matchObj
    }
    public set matchObj(value: object) {
        this._matchObj = value
    }

    constructor(key: string, value: string) {
        this._matchObj[key] = value
    }
}