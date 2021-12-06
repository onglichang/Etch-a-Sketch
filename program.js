// Handle colour change options
const vintageBtn = document.getElementById("vintage");
let pointerColourClass = "vintage"; 
vintageBtn.addEventListener('click', changeToVintage);

function changeToVintage() {
    pointerColourClass = "vintage";
}

const rgbButton = document.getElementById("RGB");
rgbButton.addEventListener('click', changeToRgb);

function changeToRgb() {
    pointerColourClass = "RGB"
}

// Handle slider set up
const slider = document.getElementById("myRange");
const output = document.getElementById("slider-output");
let gridValue = slider.value;
output.innerHTML = gridValue + " x " + gridValue;
// When slider value is changed, display it and change active grid size;
slider.oninput = function() {
    gridValue = this.value;
    output.innerHTML = gridValue + " x " + gridValue;
    deleteCurrentGrid();
    createGrid(gridValue);
}

// Inside body of container div, insert 16x16 grid of squre divs
const container = document.querySelector('.container');

// Handle clear button
const clearBtn = document.getElementById("clear-grid");
clearBtn.addEventListener("click", clearGrid);

function clearGrid() {
    for (let i=0; i < container.childElementCount; i++) {
        for (let j=0; j < container.children[i].childElementCount; j++) {
            container.children[i].children[j].style.backgroundColor = "white";
        }
    }

}

function createGrid(noOfSquares) {
    for (let i=0; i < noOfSquares; i++) {
        // Add in horizontal div into container
        let horDiv = document.createElement('div');
        horDiv.setAttribute('style', 'display: flex; flex: 1;');

        for (let j=0; j < noOfSquares; j++) {
            //Inside each horizontal div, add 16 vertical divs
            let verDiv = document.createElement('div');
            verDiv.setAttribute('style', 'flex: 1');
            //Add event listener to each inner-box div
            verDiv.addEventListener('mouseenter', changeColor)
            horDiv.appendChild(verDiv);
        }
        container.appendChild(horDiv);
    }
}

createGrid(gridValue);

// Set up hover effect so that grid divs change color when mouse passes over them
function changeColor(e) {
    if (pointerColourClass == "vintage") {
        e.target.style.backgroundColor = "black";
    } else {
        e.target.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    }
}

function deleteCurrentGrid() {
    container.textContent = '';
}