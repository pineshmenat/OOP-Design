export default class Product {
    private _productId: number
    private _productName: string


    public get productId(): number {
        return this._productId;
    }


    public set productId(v: number) {
        this._productId = v;
    }


    public get productName(): string {
        return this._productName
    }


    public set productName(v: string) {
        this._productName = v;
    }
}