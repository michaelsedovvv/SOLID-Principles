// Open Close Principle

class Shape {
  area() {
    throw new Error("Area method should be implemented");
  }
}

class Square extends Shape {
  constructor(size) {
    super();
    this.size = size;
  }

  area() {
    return this.size ** 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return this.radius ** 2 * Math.PI;
  }
}

class AreaCalculator {
  constructor(shapes) {
    this.shapes = shapes;
  }

  sum() {
    return this.shapes.reduce((acc, shape) => {
      acc += shape.area();
      return acc;
    }, 0);
  }
}

const calc = new AreaCalculator([new Square(10), new Circle(5), new Circle(2)]);

console.log(calc.sum());
