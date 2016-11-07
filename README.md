# css-transform

a function that converts visual css transform to its real position.

# v1.0.3

# @param

- options [object] rotate element options {x, y, width, height}
- angle [number] totate angle

# @return

{
  point: {
    topLeft,
    topRight,
    bottomLeft,
    bottomRight
  },
  width,
  height,
  left,
  right,
  top,
  bottom
}

# Usage

```
npm i css-transform
var transform = require("css-transform");
console.log({
  x: 50,
  y: 50,
  width: 100,
  height: 100
}, 60);
```
