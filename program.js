// Inside body of container div, insert 16x16 grid of squre divs
const container = document.querySelector('.container');

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

createGrid(16);

// Set up hover effect so that grid divs change color when mouse passes over them
function changeColor(e) {
    e.target.setAttribute('class', 'black-box');
}