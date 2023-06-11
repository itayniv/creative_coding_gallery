
const getCanvasSize = () => {
    const parentDiv = document.querySelector('#pFiveSketch');
    return [parentDiv.clientHeight, parentDiv.clientWidth]
  }
  
  var shapeSelector = 0;

  export function maorDrawing(p) {
  
    const dimm = getCanvasSize();
  
    let brushSize = 10; // Set default brush size
    let brushColor = [255, 0, 0]; // Set default brush color to red
  
  
    p.setup = function () {
      let canvas = p.createCanvas(dimm[0], dimm[1]);

      p.angleMode(p.DEGREES);
      p.rectMode(p.CENTER);
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

      p.mousePressed = function () { //calls for the drawing function each time mouse is clicked
          makeTheDrawing();
      }


    function makeTheDrawing() { //creates the drawing in several steps
        // p.background("white");
        shapeSelector = shapeSelector + 1; //adds 1 to the var shapeSelector to change what case is called
        switch (shapeSelector) { //executes different functions according to the value of shapeSelector
        case 1:
            makeBlackSquare();
            break;
        case 2:
            makeText();
            break;
        case 3:
            makeNum();
            break;
        case 4:
            makeRedSquare();
            break;
        case 5: //resets the canvas and shapeSelector
            shapeSelector = 0;
            p.background("white");
                  break;
              default:
              //
          }
      }

      function makeBlackSquare() {
          p.fill("black");
          p.noStroke();
          p.translate(p.mouseX, p.mouseY); //sets origin point of square to mouse position 
          p.rotate(p.random(1, 360)); //rotates the square to a random degree
          p.square(0, 0, p.random(5, 400));  //creates a square with random side size
      }




      function makeRedSquare() {
          p.fill("#ea3628");
          p.noStroke();
          p.translate(p.mouseX, p.mouseY);
          p.rotate(p.random(1, 360));
          p.square(0, 0, p.random(5, 400));
      }

      function makeNum() {
          p.textSize(p.random(2, 300)); //sets text size to random
          p.fill("black");
          p.translate(p.mouseX, p.mouseY);
          p.rotate(p.random(1, 360));
          p.text('2', 0, 0); //creates text at mouse location
      }

      function makeText() {
          p.textSize(p.random(2, 300));
          p.fill("black");
          p.translate(p.mouseX, p.mouseY);
          p.rotate(p.random(1, 360));
          p.text('про', 0, 0);
      }
  };
  



// /*
// בכל קליק של העכבר הקוד יצייר אלמנט אחד (יש ארבעה סך הכל). האלמנטים קבועים, מיקומם נקבע לפי העכבר והגודל והסיבוב שלהם אקראיים.
// מבוסס על הספר "About Two Squares" מאת אל ליסיצקי, 1922
// */

