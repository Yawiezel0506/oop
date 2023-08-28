class Shape {
  info(): void {
    console.log("Shape");
  }
}

class Rectangle extends Shape {
  _width: number;
  _length: number;

  constructor(width: number, length: number) {
    super();
    this._width = width;
    this._length = length;
  }

  area(): number {
    return this._width * this._length;
  }

  info(): void {
    console.log("This is a rectangle");
  }

  scale(x:number, y:number) {
    this._width += x;
    this._length += y;
    return this;
  }

  connectRectangles(rec:Rectangle):Rectangle {
    const newRec = new Rectangle(this._width + rec._width, this._length + rec._length)
    return newRec;
  }
}

class ColorRectangle extends Rectangle {
  _color: string;

  constructor(width: number, length: number, color: string) {
    super(width, length);
    this._color = color;
  }

  info(): void {
      super.info() + " with color " + this._color
  }
}

class Box extends Rectangle {
  _height: number;

  constructor(height: number, width: number, length: number) {
    super(width, length);
    this._height = height;
  }
}

const test = new Rectangle(3,4);
test.info()
