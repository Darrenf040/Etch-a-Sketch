const body = document.querySelector("body");
const title = document.createElement("div");
title.className = "title";
title.textContent = "Etch A Sketch";
const mainContainer = document.createElement("div");
mainContainer.className = "main-container";
const gridContainer = document.createElement("div");
gridContainer.className = "grid-container";

const leftBar = document.createElement("div");
leftBar.className = "left";
const rightBar = document.createElement("div");
rightBar.className = "right";

const gridButton = document.createElement("button");
gridButton.className = "grid-button";

gridButton.textContent = "16 x 16";
let input = 16;


body.appendChild(title);
title.appendChild(gridButton);
body.appendChild(mainContainer);
mainContainer.appendChild(leftBar);
mainContainer.appendChild(gridContainer);
mainContainer.appendChild(rightBar);

for(let i = 0; i < input * input; i++){
    const box = document.createElement("div");
    box.className = "box";
    gridContainer.appendChild(box);
    box.style.flexBasis = `calc(100% / ${input})`;
}
let allBoxes = document.querySelectorAll(".box");

gridContainer.addEventListener("click", ()=>{
    allBoxes.forEach(box => {
        box.addEventListener("mouseover", function(){
            box.style.background = box.style.background = 'linear-gradient(to bottom, #ffffff 0%, #ff0000 33%)';
        });
    });
});


const footer = document.createElement("footer");
body.appendChild(footer);



gridButton.addEventListener("click", function (e) {
    let input;
    do{
        input = prompt("Enter dimension: ");
    }while(input > 64 || input < 0 || isNaN(input));
    if(input == null){
        input = 16;
    }
    input = Math.floor(input);

    gridButton.textContent = input + " x " + input;
    allBoxes.forEach(box =>{
        box.remove();
    });
    for(let i = 0; i < input * input; i++){
        const box = document.createElement("div");
        box.className = "box";
        gridContainer.appendChild(box);
        box.style.flexBasis = `calc(100% / ${input})`;
    }
    allBoxes = document.querySelectorAll(".box");
    gridContainer.addEventListener("click", ()=>{
        allBoxes.forEach(box => {
            box.addEventListener("mouseover", function(){
                box.style.background = box.style.background = 'linear-gradient(to bottom, #ffffff 0%, #ff0000 33%)';
            });
        });
    });
});

const clearButton = document.createElement("button");
clearButton.className = "clear-button";
clearButton.textContent = "Clear";
footer.appendChild(clearButton);

clearButton.addEventListener("click", ()=>{
    allBoxes.forEach(box =>{
        box.style.background = ""; 
    });     
});

