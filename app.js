//Create an app that registers mouse movement over a 16x16 grid that changes tile color on initial mouseHover interaction
const main = document.querySelector('#main');
const button = document.querySelector('#reset');
let gridSize = gridMaker();
let gridHover = colorChange();

function gridMaker () {
    let size = prompt('Enter a size: ')
    if (size < 16) {
        prompt("Needs to be at least 16!  Please re-enter:")
    } else if (size > 100) {
        size = 100;
    }

    main.style.gridTemplateColumns = `repeat(${size},1fr)`;
    for (let i = 0; i < size*size; i++) {
        var div = document.createElement("div");
        div.class = 'etch';
    
    document.getElementById("main").appendChild(div);
    }
}
//When mouse hovers over a div, permanently change color of that div
function colorChange () {
    document.body.addEventListener('mouseover', (e) => {
        if (e.target.class == 'etch') {
          console.log(e.target.class)
          e.target.style.background = 'black'
        }
      });
}
//Add a button that lets player change the grid size in divs (ALL grids should take up the same total number of pixels regardless of size)

button.addEventListener('click', (e) => {
    console.log(main.childElementCount)
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
      }
      gridMaker()
})

