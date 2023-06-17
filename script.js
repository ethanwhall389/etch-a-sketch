


// box.addEventListener('hover', () => {
//     box.style.background = 'blue';
// })


let gridContainer = document.querySelector('.gridContainer');
let color = 'green';

function createGrid (squares) {
    let totalSquares = squares * squares;
    for (let i = 0; i < totalSquares; i++) {
        // gridContainer.removeChild(square);
        let square = document.createElement('div');
        gridContainer.appendChild(square);
        square.classList.add('box');


        square.style.width = `${520 / squares}px`;
        square.style.height = `${520 / squares}px`;

        square.addEventListener('mouseover', () => {
            square.style.background = color;
        })
    }
}


createGrid(16);


let bttnChangeSize = document.querySelector('.bttnChangeGrid');
bttnChangeSize.addEventListener('click', newGrid);

function newGrid () {
    let size = prompt("Define a number for one side of the grid:")
    if (size > 100 || size < 1) {
        alert('Size must be between 1 and 100. Please enter another number.')
        return;
    }
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    createGrid(size);
}



    let optionBlue = document.querySelector('.optionBlue');
    let optionGreen = document.querySelector('.optionGreen');
    let optionRed = document.querySelector('.optionRed');
    optionBlue.addEventListener('click', () => {
        color = 'blue'
        console.log ('click');
    });

    optionGreen.addEventListener('click', () => {
        color = 'green'
        console.log ('click');
    });

    optionRed.addEventListener('click', () => {
        color = 'red'
        console.log ('click');
    });
