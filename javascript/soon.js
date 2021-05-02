const dropContainerEl = document.getElementById('drop-container');

const dropWords = ['very', 'very', 'very', 'soon'];
let currentWord = 0;
let lastCursorPosition = {};

// on mouse movement x or y greater than 100px (or maybe whenever curzor reaches a x or y that's % by something?)
// create div fixed in position with current word as innerHTML
// if  currentWord >= dropWords.length -  1, then currentWord  = 0, else, currentWord++
// push current cursor position to lastCursorPosition

dropContainerEl.addEventListener('mousemove', e=> {
    if (!lastCursorPosition.x) {
        lastCursorPosition.x = e.clientX
        lastCursorPosition.y = e.clientY
    } else if (diff(e.clientX, lastCursorPosition.x) > 50 || diff(e.clientY, lastCursorPosition.y) > 50) {
        let div = document.createElement('div');
        div.classList.add('dropped-word');
        div.innerText = dropWords[currentWord];
        div.style.left = e.clientX + 'px';
        div.style.top = e.clientY + 'px';
        dropContainerEl.appendChild(div);

        lastCursorPosition.x = e.clientX
        lastCursorPosition.y = e.clientY
        if (currentWord >= dropWords.length - 1) {
            currentWord = 0;
        } else {
            currentWord++;
        }
    }
});

dropContainerEl.addEventListener('touchmove', e=> {
    console.log('hi');
})





function diff(a, b) {
    if (a > b) {
        return a - b
    } else {
        return b - a
    }
}