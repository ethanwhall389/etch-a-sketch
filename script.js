


let gridContainer = document.querySelector('.gridContainer');
let color = 'green';

function createGrid (squares) {
    let totalSquares = squares * squares;
    for (let i = 0; i < totalSquares; i++) {
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



let paintOptionBlue = document.querySelector('.optionBlue');
let paintOptionGreen = document.querySelector('.optionGreen');
let paintOptionRed = document.querySelector('.optionRed');
let paintOptionRandom = document.querySelector('.optionRandom');

paintOptionBlue.addEventListener('click', () => {
    color = 'blue'
});

paintOptionGreen.addEventListener('click', () => {
    color = 'green'
});

paintOptionRed.addEventListener('click', () => {
    color = 'red'
});

paintOptionRandom.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    color = `rgb(${r}, ${g}, ${b})`;
    document.querySelector('.block04').style.background = color;
})


let canvOptionBlue = document.querySelector('.canvOptionBlue');
let canvOptionPink = document.querySelector('.canvOptionPink');
let canvOptionYellow = document.querySelector('.canvOptionYellow');
let boxes = document.querySelector('.box');

canvOptionBlue.addEventListener('click', () => { changeCanvColor('lightblue') }); // we are puuting the function inside an anonymous function to keep it from being called immediately.
canvOptionPink.addEventListener('click', () => { changeCanvColor('pink') });
canvOptionYellow.addEventListener('click', () => { changeCanvColor('yellow') });

function changeCanvColor (color) {
    let boxChildren = gridContainer.children;
    for (let i = 0; i < boxChildren.length; i++) {
        boxChildren[i].style.background = color;
    }
}

