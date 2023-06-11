import { currentStudentName } from "./script.js";

const getCanvasSize = () => {
    const parentDiv = document.querySelector('#pFiveSketch');
    return [parentDiv.clientHeight, parentDiv.clientWidth]
}

export function oriDrawing(p) {

    const dimm = getCanvasSize();

    let startX, startY; // starting point of the line
    let endX, endY; // current endpoint of the line
    let lineColor; // variables to store the line and background colors
    
    p.setup = function () {
        let canvas = p.createCanvas(dimm[0], dimm[1]);
        p.background(0, 0.5)
        lineColor = p.color(p.random(255)); // initialize line color to white
    };

    p.draw = function () {
        p.background(0,0.5);
        p.stroke(lineColor);
        p.line(startX, startY, endX, endY);
    }

    p.mousePressed = function () {
        startX = p.mouseX;
        startY = p.mouseY;
        endX = p.mouseX;
        endY = p.mouseY;
    }

    p.mouseDragged = function () {
        endX = p.mouseX;
        endY = p.mouseY;
    }

    p.keyPressed = function () {


        if (p.keyCode === 32){ // check if spacebar is pressed
            console.log("up");
            lineColor = p.color(p.random(255), p.random(255), p.random(255)); // set line color to random color
        }
    }
};
