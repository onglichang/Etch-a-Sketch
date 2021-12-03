// Inside body of container div, insert 16x16 grid of squre divs
const container = document.querySelector('.container');

for (let i=0; i < 16; i++) {
    // Add in horizontal div into container
    let horDiv = document.createElement('div');
    horDiv.setAttribute('style', 'display:flex');
    for (let j=0; j < 16; j++) {
        //Inside each horizontal div, add 16 vertical divs
        let verDiv = document.createElement('div');
        horDiv.appendChild(verDiv);
    }
    container.appendChild(horDiv);
}