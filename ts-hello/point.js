"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    // private x: number;
    // private y: number;
    // if want to make variable without declaring it on an open line,
    // use an access modifier to indicate it in the constructor.
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        // this.x = x;
        // this.y = y;    
    }
    Point.prototype.draw = function () {
        console.log("X's value is " + this._x + " and Y's value is " + this._y + ".");
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Value cannot be less than 0');
            }
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
