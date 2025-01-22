console.log("We're live!");

// Playing field
const field = document.querySelector(".field");
// Reset options
const resetSizeInput = document.querySelector("#size");
const resetSizeButton = document.querySelector(".options button");

function createSquareGrid(container, size) {
    const grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");

        for (let j = 0; j < size; j++) {
            const box = document.createElement("div");
            box.setAttribute("class", "grid-box");
            box.addEventListener("mouseenter", () => {
                onHoverEnter(box);
            });
            row.appendChild(box);
        }

        grid.appendChild(row);
    }

    container.prepend(grid);
    return;
}

function removeGrid(container) {
    console.log(`[DEBUG]: Removing ${container.firstElementChild} from the field`);
    container.removeChild(container.firstElementChild);
    return;
}

function onHoverEnter(div) {
    div.setAttribute("class", "grid-box hovered");
    return;
}

resetSizeButton.addEventListener("click", () => {
    let size = Number(resetSizeInput.value);
    console.log(size);
    if (isNaN(size) || size < 1 || size > 100) {
        alert("Grid values are [1, 100] inclusive.");
    } else {
        removeGrid(field);
        createSquareGrid(field, size);
    }
});

createSquareGrid(field, 16);
