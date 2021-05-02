const dropContainerEl = document.getElementById('drop-container');

const events = ['mousemove', 'touchmove'];
const dropWords = ['very', 'very', 'very', 'soon'];
let currentWord = 0;
let lastCursorPosition = {};

events.forEach(event => dropContainerEl.addEventListener(event, e => { 
    if (e.touches) {
        e.clientX = e.touches[0].clientX;
        e.clientY = e.touches[0].clientY;
    }
    console.log(e.clientX);
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
}));

function diff(a, b) {
    if (a > b) {
        return a - b
    } else {
        return b - a
    }
}