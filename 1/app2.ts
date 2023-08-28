class Shape2 {
  draw(): void {
    console.log("Drawing a shape");
  }
}

class Square extends Shape2 {
  constructor() {
    super();
  }

  draw(): void {
    console.log("Square");
  }
}

class Rectangle2 extends Shape2 {
  constructor() {
    super();
  }

  draw(): void {
    console.log("Rectangle");
  }
}

class Triangle extends Shape2 {
  constructor() {
    super();
  }

  draw(): void {
    console.log("Triangle");
  }
}

const renderShapes = (arr: Shape2[]):void => {
    arr.forEach(shape => {
        shape.draw();
    })
}

const tri:Triangle = new Triangle()
const rec:Rectangle2 = new Rectangle2()
const sqr:Square = new Square()

const shapes:Shape2[] = [tri, rec, sqr]

renderShapes(shapes)
