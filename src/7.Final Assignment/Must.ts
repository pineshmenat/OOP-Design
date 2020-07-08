import Bool from "./Bool";
import Match from "./Match";

export default class Must{
    private _mustObj: Array<object> = [];
    
    public get mustObj(): object {
        return this._mustObj;
    }

    addMatch(match: Match) {
        this._mustObj.push({
            "match": match.matchObj
        });
    }

    mustMatch(key: string, value: any): Must {
        this.addMatch(new Match(key, value));
        return this;
    }

    public bool(): Bool {
        let bool = new Bool();
        this._mustObj.push({
            "bool": bool.boolObj
        });
        return bool;
    }

    /**
     * toString
     */
    public toString() {
        return this._mustObj;
    }
}