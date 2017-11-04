export class Point {
    // private x: number;
    // private y: number;

    // if want to make variable without declaring it on an open line,
    // use an access modifier to indicate it in the constructor.
    constructor (private _x?: number, private _y?: number) {
        // this.x = x;
        // this.y = y;    
    }

    draw() {
        console.log(`X's value is ${ this._x } and Y's value is ${ this._y }.`);
    }

    get x () {
        return this._x;
    }

    set x (value) {
        if (value < 0) {
            throw new Error('Value cannot be less than 0');
        }

        this._x = value;    
    }

}