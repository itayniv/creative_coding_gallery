console.log("hello")

let currStudent = 0;

const projects = [
    { name: "איבנקובסקי איתי", url: "" },
    { name: "אשכנזי אלמוג", url: "" },
    { name: "בוטבול אלון אהרון צבי", url: "" },
    { name: "בזה גלי", url: "" },
    { name: "בן שאול שירה ישכה", url: "" },
    { name: "ברסלב אמילי שיראל", url: "" },
    { name: "גרינברג גל", url: "" },
    { name: "המר בניה מנחם", url: "" },
    { name: "הנגלברגר קטרינה", url: "" },
    { name: "וולף תובל", url: "" },
    { name: "חיים רותם", url: "" },
    { name: "כהן ענבר", url: "" },
    { name: "כהן וולין דוד", url: "" },
    { name: "מנו יותם", url: "" },
    { name: "נאה יובל", url: "" },
    { name: "שני אורי", url: "" },
    { name: "פרידמן מאור", url: "" },
    { name: "פישמן קרן", url: "" }
];


const initPage = (projectsList, parentID) => {
    const parentNode = document.querySelector(`${parentID}`);
    console.log("run", parentNode);

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
};


const handleClick = (e) => {
    console.log(e.target.innerHTML);
    selectStudent(e.target.id)
}


const changeP5Sketch = (e) => {
}


setTimeout(() => {
    initPage(projects, ".namesContainer");
    startTimer();
}, 100);




function setup() {

    const dimm = getCanvasSize();
    const canvas = createCanvas(dimm[0], dimm[1]);
    canvas.parent('pFiveSketch');
}

function draw() {
    background(255);
    text(frameCount, 100, 100)
}



const getCanvasSize = () => {
    const parentDiv = document.querySelector('#pFiveSketch');
    return [parentDiv.clientHeight, parentDiv.clientWidth]
}



const selectStudent = (studentID) => {
    let parentDiv = document.querySelector('#namesContainer');
    const childDivs = parentDiv.children;
    // console.log(childDivs)

    for (let i = 0; i < childDivs.length; i++) {
        const childDiv = childDivs[i];

        const nestedSpan = childDiv.getElementsByTagName('a')[0];
        nestedSpan.classList.remove("studentNameSelected");
        nestedSpan.classList.add("studentName");


        if (nestedSpan.id === studentID) {
            nestedSpan.classList.remove("studentName");
            nestedSpan.classList.add("studentNameSelected");
        }
    }
}

let intervalId;

function startTimer() {
    intervalId = setInterval(function () {
        // Function to execute every 10 seconds
        console.log("Executing function every 10 seconds");
        if (currStudent <= projects.length - 1) {
            currStudent++;
        } else {
            currStudent = 0;
        }
    }, 2000);
}

function stopTimer() {
    clearInterval(intervalId);
}

// Example condition to stop the timer
document.addEventListener("click", function () {
    // Call stopTimer() when the document is clicked
    stopTimer();
    startTimer()
});