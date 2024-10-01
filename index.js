
function createGrid(size){
    let mainGrid = document.querySelector("#grid");
    for(let i = 1; i < size**2 + 1; i++){
        div = document.createElement("div");
        div.setAttribute("id", "div" + i);
        div.classList.add("gridElement");
        div.style = "width:"+500/size+"px; height:"+500/size+"px;";
        mainGrid.appendChild(div);
    }
    return document.querySelectorAll(".gridElement");
}

function setColor(gridBlocks){
    gridBlocks.forEach((block) => {
        block.addEventListener("mouseover", () => {
            try{
                block.style.backgroundColor = color;
            } catch{
                block.style.backgroundColor = "blue";
            }
        })
    });
}

function initialiseColorPicker(colorInput) {
    colorInput.addEventListener("input", () => {
        color = colorInput.value;
        setColor();
    })
}

function initialiseSize(sizeInput, gridBlocks) {
    sizeInput.addEventListener("input", () => {
        size = sizeInput.value;
        gridBlocks.forEach((block) => {
            block.remove();
        })
        gridBlocks = createGrid(size);
        setColor(gridBlocks);
    })
}

function main(){
    const mainGrid = document.querySelector("#grid");
    const sizeInput = document.querySelector("#size");
    const colorInput = document.querySelector("#color-selector");
    let color = colorInput.value;
    let gridBlocks = createGrid(16);
    initialiseColorPicker(colorInput);
    setColor(gridBlocks);
    initialiseSize(sizeInput, gridBlocks);
}

main();