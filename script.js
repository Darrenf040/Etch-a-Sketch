const gridContainer = document.querySelector(".grid-container");
for(let i = 0; i < 256; i++){
    const box = document.createElement("div");
    box.className = "box";
    box.textContent = i + 1;    
    gridContainer.appendChild(box);
}


