
let message: string = 'test';
// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;

// add the heading to the document
document.body.appendChild(heading);

// function to set background color based on window size
function setBackgroundColor() {
    if (window.innerWidth === 800 && window.innerHeight === 600) {
        document.body.style.backgroundColor = "#909090";
    } else {
        document.body.style.backgroundColor = ""; // reset to default
    }
}

// set initial background color
setBackgroundColor();

// add event listener for window resize
window.addEventListener('resize', setBackgroundColor);

function setBodySizeToWindow() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    document.body.style.width = `${width}px`;
    document.body.style.height = `${height}px`;

    console.log("Window inner width")
    console.log(window.innerWidth)

    console.log("Window outer height")
    console.log(window.outerWidth)

    console.log("Window inner height")
    console.log(window.innerHeight)

    console.log("Window outer height")
    console.log(window.outerHeight)
}

// Call the function initially to set the size
setBodySizeToWindow();

// Update the size on window resize
addEventListener('resize', setBodySizeToWindow);
addEventListener('resize', setBackgroundColor);

export class Game {
    constructor(ctx: CanvasRenderingContext2D){

    }

    public run(){


    }
}