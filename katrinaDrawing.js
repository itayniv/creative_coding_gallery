import { currentStudentName } from "./script.js";

const getCanvasSize = () => {
    const parentDiv = document.querySelector('#pFiveSketch');
    return [parentDiv.clientHeight, parentDiv.clientWidth]
}



export function katrinaDrawing(p) {

    let mic;
    let amp;

    let x = 0;
    let y = 100;

    let r, g, b;

    const dimm = getCanvasSize();

    p.setup = function () {
        let canvas = p.createCanvas(dimm[0], dimm[1]);

        x = dimm[0] / 2;
        y = dimm[1] / 2;
        p.background(80, 0, 250)

        // audio input
        mic = new p5.AudioIn();
        mic.start();

        //amplitude object that will use mic as input
        amp = new p5.Amplitude();
        amp.setInput(mic);

    };

    p.draw = function () {

        if (amp.getLevel().length > 0) {
            let level = amp.getLevel();

            r = p.random(250);
            g = p.random(40);
            b = p.random(200);

            p.rectMode(p.CENTER);
            p.noStroke();
            p.fill(r, g, b, 100);
            p.rect(x, y, (level * p.width) / 2, (level * p.width) / 2);

            x += 2;

            if (x > p.width) {
                x = 0;
                y += 50;
            }

            if (y > p.height) {
                y = 0;
            }
        }
    }

    p.mousePressed = function () {
        p.background(80, 0, 250);
    }


};





// // Audio drawing machine
// // Sing a song and it will be visualized
// // To erase the drawing, click with mouse

// // Variables

// function setup() {
//   createCanvas(600, 600);

//   // audio input
//   mic = new p5.AudioIn();
//   mic.start();

//   //amplitude object that will use mic as input
//   amp = new p5.Amplitude();
//   amp.setInput(mic);

//   background(80, 0, 250);
// }

// function draw() {

// }
