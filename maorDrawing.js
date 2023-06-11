import { currentStudentName } from "./script.js";

const getCanvasSize = () => {
    const parentDiv = document.querySelector('#pFiveSketch');
    return [parentDiv.clientHeight, parentDiv.clientWidth]
  }
  
  var shapeSelector = 0;

  export function maorDrawing(m) {
  
    const dimm = getCanvasSize();
  
    let brushSize = 10; // Set default brush size
    let brushColor = [255, 0, 0]; // Set default brush color to red
  
  
    m.setup = function () {
      let canvas = m.createCanvas(dimm[0], dimm[1]);

      m.angleMode(m.DEGREES);
      m.rectMode(m.CENTER);
      m.background(255); // Set background to white
  
    };
  
    m.draw = function () {
      // Draw a circle at the mouse position with the current brush settings
          // Your drawing code for sketch 1 goes here
      };

      m.mousePressed = function () { //calls for the drawing function each time mouse is clicked
          if (currentStudentName === "פרידמן מאור") {
              makeTheDrawing();
          }
      }

    function makeTheDrawing() { //creates the drawing in several steps
        // m.background("white");
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
            m.background("white");
                  break;
              default:
              //
          }
      }

      function makeBlackSquare() {
          m.fill("black");
          m.noStroke();
          m.translate(m.mouseX, m.mouseY); //sets origin point of square to mouse position 
          m.rotate(m.random(1, 360)); //rotates the square to a random degree
          m.square(0, 0, m.random(5, 400));  //creates a square with random side size
      }

      function makeRedSquare() {
          m.fill("#ea3628");
          m.noStroke();
          m.translate(m.mouseX, m.mouseY);
          m.rotate(m.random(1, 360));
          m.square(0, 0, m.random(5, 400));
      }

      function makeNum() {
          m.textSize(m.random(2, 300)); //sets text size to random
          m.fill("black");
          m.translate(m.mouseX, m.mouseY);
          m.rotate(m.random(1, 360));
          m.text('2', 0, 0); //creates text at mouse location
      }

      function makeText() {
          m.textSize(m.random(2, 300));
          m.fill("black");
          m.translate(m.mouseX, m.mouseY);
          m.rotate(m.random(1, 360));
          m.text('про', 0, 0);
      }
  };
  



// /*
// בכל קליק של העכבר הקוד יצייר אלמנט אחד (יש ארבעה סך הכל). האלמנטים קבועים, מיקומם נקבע לפי העכבר והגודל והסיבוב שלהם אקראיים.
// מבוסס על הספר "About Two Squares" מאת אל ליסיצקי, 1922
// */

