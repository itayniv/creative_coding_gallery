import { currentStudentName } from "./script.js";

const getCanvasSize = () => {
    const parentDiv = document.querySelector('#pFiveSketch');
    return [parentDiv.clientHeight, parentDiv.clientWidth]
}


let start = 0;
let counter = 0;

let img;
let cnv;
var scaler = 1;
var ychange = 0;


export function almogDrawing(m) {

    const dimm = getCanvasSize();

    let brushSize = 10; // Set default brush size
    let brushColor = [255, 0, 0]; // Set default brush color to red


    m.preload = function () {
        //preload the image before setup()
        img = p.loadImage("assets/ME2.jpg");
    }


    m.setup = function () {
        let canvas = m.createCanvas(dimm[0], dimm[1]);
        cnv = createCanvas(img.width / 2, img.height / 2);

        //center the canvas
        let newCanvasX = (windowWidth - img.width / 2) / 2;
        let newCanvasY = (windowHeight - img.height / 2) / 2;
        cnv.position(newCanvasX, newCanvasY);

        //resize the image
        img.p.resize(img.width / 2, img.height / 2);

        //draw the initial image
        start = start + 0;
        for (let col = start; col < img.width; col += 30) {
            for (let row = 0; row < img.height; row += 10) {
                let c = img.get(col, row);
                m.stroke(color(c));
                m.strokeWeight(10);
                m.point(col, row);
            }
        }
    };

    m.draw = function () {
        if (m.mouseIsPressed) {
            //draw a new line for every tile that the mouse is near
            var tiles = 120;
            var tileSize = width / tiles;
            var tileSize = height / tiles;
        
            m.translate(tileSize / 2, tileSize / 2);
        
            for (var x = 0; x < tiles; x++) {
              for (var y = 0; y < tiles; y++) {
                var c = img.get(int(x * tileSize), int(y * tileSize));
                var size = m.map(brightness(c), 0, 255, 16, 8);  ////brush size
        
                if (m.dist(mouseX, mouseY, x * tileSize, y * tileSize) < size * 2) {
                  m.stroke(c);
                  m.strokeWeight(size);
                  m.line(mouseX, mouseY, x * tileSize, y * tileSize);
                }
              }
            }
          } else {
            //clear the canvas and draw a new image
            m.background(100,5);
            start = start + 20;
            for (let col = start; col < img.width; col += 10) {
              for (let row = 0; row < img.height; row += 10) {
                let c = img.get(col, row);
                m.stroke(color(c));
                m.strokeWeight(10);
                m.point(col, row);
        
                counter = counter + 1;
              }
            }
          }
    };
};


