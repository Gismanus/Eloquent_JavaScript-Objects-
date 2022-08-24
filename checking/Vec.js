class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(other) {
        return new Vec(this.x + other.x, this.y + other.y);
    }
    minus(other) {
        return new Vec(this.x - other.x, this.y - other.y);
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}
// --> test
let vector1 = new Vec(3, 4);
let vector2 = new Vec(3, 4);
let vector3 = vector1.minus(vector2);
console.log(vector3.length, vector3.x, vector3.y);