class Vec {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    plus(other){
        return new Vec(this.x + other.x, this.y + other.y);
    }
    minus(other) {
        return new Vec(this.x - other.x, this.y - other.y);
    }
    get length(){
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}
// --> test
let vector = new Vec(3, 4);
console.log(vector.length);