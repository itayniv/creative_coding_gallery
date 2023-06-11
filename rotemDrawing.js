
const getCanvasSize = () => {
  const parentDiv = document.querySelector('#pFiveSketch');
  return [parentDiv.clientHeight, parentDiv.clientWidth]
}


export function rotemDrawing(p) {

  const dimm = getCanvasSize();

  let brushSize = 10; // Set default brush size
  let brushColor = [255, 0, 0]; // Set default brush color to red


  p.setup = function () {
    console.log("sketch 1");
    let canvas = p.createCanvas(dimm[0], dimm[1]);
    p.background(255); // Set background to white

  };

  p.draw = function () {
    // Draw a circle at the mouse position with the current brush settings
    if (p.mouseIsPressed) {
      p.fill(brushColor);
      p.noStroke();

      // Draw a circle on the left side of the canvas
      p.circle(p.mouseX, p.mouseY, brushSize);

      // Draw a mirrored circle on the right side of the canvas
      let mirroredX = p.width - p.mouseX;
      p.push();
      p.translate(mirroredX, p.mouseY);
      p.scale(-1, 1);
      p.circle(0, 0, brushSize);
      p.pop();

      // Draw a mirrored circle on the top half of the canvas
      let mirroredY = p.height - p.mouseY;
      p.push();
      p.translate(p.mouseX, mirroredY);
      p.scale(1, -1);
      p.circle(0, 0, brushSize);
      p.pop();

      // Draw a mirrored circle on the bottom half of the canvas
      p.push();
      p.translate(mirroredX, mirroredY);
      p.scale(-1, -1);
      p.circle(0, 0, brushSize);
      p.pop();
    }
    // Your drawing code for sketch 1 goes here
  };

  p.keyPressed = function () {

    // Increase/decrease brush size with arrow keys
    if (p.keyCode === "ArrowUp") {
      brushSize += 5;
    } else if (p.keyCode === "ArrowDown") {
      brushSize -= 5;
      if (brushSize < 1) {
        brushSize = 1;
      }
    } else if (p.key === "w" || p.key === "W") {
      // Wipe the canvas when the 'w' key is pressed
      p.background(255);
    } else if (p.key === "b" || p.key === "B") {
      // Change the background color when the 'b' key is pressed
      p.background(p.random(255), p.random(255), p.random(255));
    } else if (p.keyCode === 32) {
      // Change the brush size on space key press
      brushSize = p.round(p.random(5, 20));
    }
  }

  p.mouseClicked = function () {
    // Change the brush color on each left mouse click
    if (p.mouseButton === p.LEFT) {
      brushColor = [p.random(255), p.random(255), p.random(255)];
    }
  }
};
