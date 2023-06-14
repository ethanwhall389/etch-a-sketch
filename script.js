let gridContainer = document.querySelector('.gridContainer');
for (i = 0; i < 256; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    gridContainer.appendChild(box);
    
    box.addEventListener('mouseover', () => {
        box.style.background = 'blue';
    })
}


// box.addEventListener('hover', () => {
//     box.style.background = 'blue';
// })