


// box.addEventListener('hover', () => {
//     box.style.background = 'blue';
// })


let gridContainer = document.querySelector('.gridContainer');

function createGrid (squares) {
    let totalSquares = squares * squares;
    for (let i = 0; i < totalSquares; i++) {
        gridContainer.removeChild(square);
        let square = document.createElement('div');
        gridContainer.appendChild(square);
        square.classList.add('box');


        square.style.width = `${520 / squares}px`;
        square.style.height = `${520 / squares}px`;

        square.addEventListener('mouseover', () => {
            square.style.background = 'blue';
        })
    }
}


createGrid(16);


let bttnChangeSize = document.querySelector('.bttnChangeGrid');
bttnChangeSize.addEventListener('click', () => {
    let size = prompt("Define a number for one side of the grid:")
    gridContainer.removeChild(square);
    createGrid(size);
})