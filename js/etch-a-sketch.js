// Playing field
const field = document.querySelector(".field");
// Reset options
const resetSizeInput = document.querySelector("#size");
const resetSizeButton = document.querySelector(".options button");
// Modifiers
const rgbCheck = document.querySelector("#rgb");
const fadeCheck = document.querySelector("#fade");

let rgbColoring = false;
let fadeDrawing = false;

function createSquareGrid(container, size) {
    const grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");

        for (let j = 0; j < size; j++) {
            const box = document.createElement("div");
            const content = document.createElement("div");
            content.setAttribute("class", "content");
            box.appendChild(content);
            box.setAttribute("class", "grid-box");
            content.addEventListener("mouseenter", () => {
                onHoverEnter(content);
            });
            row.appendChild(box);
        }

        grid.appendChild(row);
    }

    container.prepend(grid);
    return;
}

function removeGrid(container) {
    container.removeChild(container.firstElementChild);
    return;
}

function onHoverEnter(div) {
    if (fadeDrawing) {
        let currOp = getComputedStyle(div).getPropertyValue("opacity");
        div.style.opacity = String(Number(currOp) + 0.1);
    }
    if (rgbColoring) {
        div.classList.remove("hovered");

        if (!fadeDrawing) {
            div.style.opacity = "1";
        }

        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += Math.floor(Math.random() * 16).toString(16);
        }
        div.style.backgroundColor = color;

    } else {
        if (!fadeDrawing) {
            div.style = "";
            div.style.opacity = "1";
        }

        div.classList.add("hovered");
    }

    return;
}

resetSizeButton.addEventListener("click", () => {
    let size = Number(resetSizeInput.value);
    if (isNaN(size) || size < 1 || size > 100) {
        alert("Grid values are [1, 100] inclusive.");
    } else {
        removeGrid(field);
        createSquareGrid(field, size);
    }
});

rgbCheck.addEventListener("change", () => {
    rgbColoring = rgbCheck.checked;
});

fadeCheck.addEventListener("change", () => {
    fadeDrawing = fadeCheck.checked;
});

createSquareGrid(field, 16);
