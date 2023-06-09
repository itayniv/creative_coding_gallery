import { rotemDrawing } from "./rotemDrawing.js";
import { galDrawing } from "./galDrawing.js";
import { emilyDrawing } from "./emilyDrawing.js";
import { maorDrawing } from "./maorDrawing.js";
import { kerenDrawing } from "./kerenDrawing.js";
import { shiraDrawing } from "./shiraDrawing.js";
import { katrinaDrawing } from "./katrinaDrawing.js";
import { oriDrawing } from "./oriDrawing.js";

const timeInterval = 20000;
let currStudent = 0;
export let currentStudentName = null;
let sketch = null;
let currentSketch = 1;


const projects = [
    // { name: "איבנקובסקי איתי", "sketch": sketch01 },
    // { name: "אשכנזי אלמוג", "sketch": galDrawing },
    // { name: "בוטבול אלון אהרון צבי", sketch: sketch03 },
    // { name: "בזה גלי", "sketch": sketch04 },
    { name: "בן שאול שירה ישכה", "sketch": shiraDrawing },
    // { name: "ברסלב אמילי שיראל", "sketch":  },
    { name: "גרינברג גל", "sketch": galDrawing },
    // { name: "המר בניה מנחם", "sketch": sketch08 },
    { name: "הנגלברגר קטרינה", "sketch": katrinaDrawing },
    // { name: "וולף תובל", "sketch": sketch010 },
    { name: "חיים רותם", "sketch": rotemDrawing },
    // { name: "כהן ענבר", "sketch": sketch012 },
    // { name: "כהן וולין דוד", "sketch": sketch013 },
    // { name: "מנו יותם", "sketch": sketch014 },
    // { name: "נאה יובל", "sketch": sketch015 },
    { name: "שני אורי", "sketch": oriDrawing },
    { name: "פרידמן מאור", "sketch": maorDrawing },
    { name: "פישמן קרן", "sketch": kerenDrawing }
];





const initPage = (projectsList, parentID) => {
    const parentNode = document.querySelector(`${parentID}`);


    _.map(projectsList, (d) => {

        const p = document.createElement("a");
        p.classList.add("studentName")
        const div = document.createElement("div");
        div.classList.add("studentNameContainer")

        p.addEventListener('click', handleClick);
        p.id = d.name;

        div.appendChild(p)
        p.innerHTML = d.name;
        parentNode.appendChild(div);
    });

    selectStudentByIndex(0)
};


const handleClick = (e) => {
    selectStudent(e.target.id)
}


const changeP5Sketch = (e) => {
}


setTimeout(() => {
    initPage(projects, ".namesContainer");
    startTimer();
}, 100);


const selectStudent = (studentID) => {
    let parentDiv = document.querySelector('#namesContainer');
    const childDivs = parentDiv.children;
    const index = _.findIndex(projects, (d) => d.name === studentID)

    toggleSketch(index)

    for (let i = 0; i < childDivs.length; i++) {
        const childDiv = childDivs[i];

        const nestedSpan = childDiv.getElementsByTagName('a')[0];
        nestedSpan.classList.remove("studentNameSelected");
        nestedSpan.classList.add("studentName");


        if (nestedSpan.id === studentID) {
            nestedSpan.classList.add("studentNameSelected");
        }
    }

    currentStudentName = projects[index].name;
    // console.log("currentStudentName", currentStudentName)
}

let intervalId;

function startTimer() {
    intervalId = setInterval(function () {
        // Function to execute every 10 seconds
        // console.log(`executing function every ${timeInterval / 1000} seconds`);
        if (currStudent <= projects.length - 2) {
            currStudent++;
        } else {
            currStudent = 0;
        }
        selectStudentByIndex(currStudent);
    }, timeInterval);
}

// select student by ID
const selectStudentByIndex = (studentIndex) => {

    console.log("selecting student by index", studentIndex)
    let parentDiv = document.querySelector('#namesContainer');
    const childDivs = parentDiv.children;

    for (let i = 0; i < childDivs.length; i++) {
        const childDiv = childDivs[i];

        const nestedSpan = childDiv.getElementsByTagName('a')[0];
        nestedSpan.classList.remove("studentNameSelected");
        // nestedSpan.classList.add("studentName");
    }

    currentStudentName = projects[studentIndex].name;
    const nestedSpan = childDivs[studentIndex].getElementsByTagName('a')[0];
    nestedSpan.classList.add("studentNameSelected");
    toggleSketch(studentIndex)
}

function stopTimer() {
    clearInterval(intervalId);
}

// Example condition to stop the timer
document.addEventListener("click", function () {
    console.log("clicking and stopping")
    // Call stopTimer() when the document is clicked
    stopTimer();
    startTimer()
});




//////


// TODO:
// /// load sketches 
const toggleSketch = (index) => {
    unloadSketch();
    loadSketch(index);
}


// const loadSketch2 = () => {
//     console.log("loading sketch 2")
//     sketch = new p5(sketch02, 'pfiveSketch');
// }

const unloadSketch = () => {
    sketch.remove();
}


const loadSketch = (index) => {
    let node = document.querySelector('#pFiveSketch');
    // console.log("loading sketch", projects[index].sketch)
    sketch = new p5(projects[index].sketch, node);
}

setTimeout(() => {
    loadSketch(0);
}, 200)
