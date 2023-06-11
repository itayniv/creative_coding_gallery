import { currentStudentName } from "./script.js";

const getCanvasSize = () => {
    const parentDiv = document.querySelector('#pFiveSketch');
    return [parentDiv.clientHeight, parentDiv.clientWidth]
}


export function shiraDrawing(p) {
    let isDrawing = false;

    let x = 0;
    let y = 0;
    let angle = 0;
    let radius = 0;
    let distance = 0;

    const dimm = getCanvasSize();

    p.setup = function () {
        let canvas = p.createCanvas(dimm[0], dimm[1]);
        x = dimm[0] / 2;
        y = dimm[1] / 2;
        p.background(240)
    };

    p.draw = function () {

        p.background(240, 240, 240, 1 / 4)

        const margin = 130;
        const canvasSize = p.width - margin * 2;

        if (p.mouseButton === p.LEFT) {
            p.stroke(7);
            p.strokeWeight(1 / 5);
            p.noFill();

            p.beginShape();
            let startX = p.constrain(p.mouseX, margin - 50, p.width - margin - 50);
            let startY = p.constrain(p.mouseY, margin - 50, p.height - margin - 50);
            let endX = margin - 50 + p.random(-10, 10);
            let endY = margin - 50 + p.random(-10, 10);
            p.line(startX, startY, endX, endY);
            p.endShape();

            p.beginShape();
            startX = p.constrain(p.mouseX, margin - 50, p.width - margin - 50);
            startY = p.constrain(p.mouseY, margin - 50, p.height - margin - 50);
            endX = p.width - margin - 50 + p.random(-10, 10);
            endY = p.height - margin - 50 + p.random(-10, 10);
            p.line(startX, startY, endX, endY);
            p.endShape();
        } else if (p.mouseButton === p.RIGHT) {
            p.stroke(7);
            p.strokeWeight(6);
            p.noFill();

            p.beginShape();
            let startX = p.constrain(mouseX, margin + 50, p.width - margin + 50);
            let startY = p.constrain(mouseY, margin + 50, p.height - margin + 50);
            let endX = p.width - margin + 50 + p.random(-10, 10);
            let endY = margin + 50 + p.random(-10, 10);
            p.line(startX, startY, endX, endY);
            p.endShape();

            p.beginShape();
            startX = p.constrain(mouseX, margin + 50, p.width - margin + 50);
            startY = p.constrain(mouseY, margin + 50, p.height - margin + 50);
            endX = margin + 50 + p.random(-10, 10);
            endY = height - margin + 50 + p.random(-10, 10);
            p.line(startX, startY, endX, endY);
            p.endShape();
        }
    }

    p.keyPressed = function () {
        const gray = p.random(180, 240);
        p.background(gray);
    };
};
