
const getCanvasSize = () => {
  const parentDiv = document.querySelector('#pFiveSketch');
  return [parentDiv.clientHeight, parentDiv.clientWidth]
}

let pixelColor = [255, 255, 255];
let lastX = 0;
let lastY = 0;
let squareSize = 20;
let changeX = 0;
let changeY = 0;
let start = true;
let release = 0;

export function galDrawing(p) {

  const dimm = getCanvasSize();

  let brushSize = 10; // Set default brush size
  let brushColor = [255, 0, 0]; // Set default brush color to red


  p.setup = function () {
    let canvas = p.createCanvas(dimm[0], dimm[1]);
    p.background(0);

  };

  p.draw = function () {
    release = release + 1;
    if (release > 5 && p.mouseIsPressed == false) {
      start = true;
      release = 0;
    }
    if (p.mouseIsPressed) {
      if (start) {
        lastX = p.mouseX;
        lastY = p.mouseY;
        start = false;
      }

      drawPixels();
    }
  };

  function drawPixels() {
    p.fill(pixelColor);
    p.noStroke();
    if (p.mouseX < lastX) {
      changeX = -1;
    } else if (p.mouseX >= lastX && p.mouseX <= squareSize + lastX) {
      changeX = 0;
    } else if (p.mouseX > lastX + squareSize) {
      changeX = 1;
    }

    //changeY
    if (p.mouseY < lastY) {
      changeY = -1;
    } else if (p.mouseY >= lastY && p.mouseY <= squareSize + lastY) {
      changeY = 0;
    } else if (p.mouseY > lastY + squareSize) {
      changeY = 1;
    }
    lastX = lastX + squareSize * changeX;
    lastY = lastY + squareSize * changeY;
    p.square(lastX, lastY, squareSize);
  }
};



