

let brush;
let softBrush;
let pabloBrush;
let rubiBrush;


const getCanvasSize = () => {
    const parentDiv = document.querySelector('#pFiveSketch');
    return [parentDiv.clientHeight, parentDiv.clientWidth]
}


export function emilyDrawing(p) {

    const dimm = getCanvasSize();

    let brushSize = 10; // Set default brush size
    let brushColor = [255, 0, 0]; // Set default brush color to red


    p.setup = function () {
        console.log("sketch 1");
        let canvas = p.createCanvas(dimm[0], dimm[1]);


        softBrush = p.loadImage('./images/PawBrush.png');
        pabloBrush = p.loadImage('./images/Pablo.png');
        rubiBrush = p.loadImage('./images/Rubi.png');

        brush = softBrush;

        p.imageMode(p.CENTER);
        p.colorMode(p.HSB);

        p.background(0); // Set background to white
    };

    p.draw = function () {
        drawSoftBrush(p.frameCount % 360, 100, 0.05);
    };


    function drawSoftBrush(col, brushSize, speed) {
        // tint our brush
        p.tint(col, 70, 100);
        p.push();
        p.translate(p.mouseX, p.mouseY);
        p.scale(p.sin(p.frameCount * speed) + 1.5);
        p.rotate(p.frameCount * 0.01);
        p.image(brush, 0, 0, brushSize, brushSize);
        p.pop();
    }

    // function keyTyped() {
    //     if (key == '1') {
    //         brush = softBrush;
    //     }

    //     if (key == '2') {
    //         brush = pabloBrush;
    //     }

    //     if (key == '3') {
    //         brush = rubiBrush;
    //     }
    // }

};


