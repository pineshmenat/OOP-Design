import Bool from "./Bool";
import Match from "./Match";

export default class Should{
    private _shouldObj: Array<object> = [];
    
    public get shouldObj(): object {
        return this._shouldObj;
    }

    addMatch(match: Match) {
        this._shouldObj.push({
            "match": match.matchObj
        });
    }

    shouldMatch(key: string, value: any): Should {
        this.addMatch(new Match(key, value));
        return this;
    }

    public bool(): Bool {
        let bool = new Bool();
        this._shouldObj.push({
            "bool": bool.boolObj
        });
        return bool;
    }

    /**
     * toString
     */
    public toString() {
        return this._shouldObj;
    }
}