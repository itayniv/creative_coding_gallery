import { currentStudentName } from "./script.js";

const getCanvasSize = () => {
    const parentDiv = document.querySelector('#pFiveSketch');
    return [parentDiv.clientHeight, parentDiv.clientWidth]
}


export function kerenDrawing(p) {
    let isDrawing = false;

    let x = 0;
    let y = 0;
    let angle = 0;
    let radius = 0;
    let distance = 0;

    const dimm = getCanvasSize();

    p.setup = function () {
        let canvas = p.createCanvas(dimm[0], dimm[1]);
        x =dimm[0] / 2;
        y =  dimm[1] / 2;   
        p.background(0)
    };

    p.draw = function () {
        if (!isDrawing) return;

        let spiralX = x + radius * p.cos(angle);
        let spiralY = y + radius * p.sin(angle);

        let a = p.random(255);
        let b = p.random(255);
        let c = p.random(255);

        p.stroke(a, b, c);
        p.strokeWeight(1);
        p.line(x, y, spiralX, spiralY);
        angle += 0.1;
        radius += p.sin(angle * 0.2) * 0.5;
    }

    p.mouseClicked = function () {
        console.log("lololo")
        if (!isDrawing) {
            x = p.mouseX;
            y = p.mouseY;
            radius = p.random(200);
            distance = p.random(50, 500);
            angle = 0;
            isDrawing = true;
        } else {
            isDrawing = false;
        }
    };
};
