"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Tringle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('This is a Triangel');
    }
    get shapeColor() {
        return this.color;
    }
}
let tri = new Tringle(2, 'red');
console.log(tri.shapeColor);
//# sourceMappingURL=index.js.map