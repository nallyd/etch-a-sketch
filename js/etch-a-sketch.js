console.log("We're live!");

const field = document.querySelector(".field");

function createSquareGrid(container, size) {
    const grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");

        for (let j = 0; j < size; j++) {
            const box = document.createElement("div");
            box.setAttribute("class", "grid-box");
            row.appendChild(box);
        }

        grid.appendChild(row);
    }

    container.appendChild(grid);
    return;
}

function removeGrid(container) {
    console.log(`Removing ${container.firstElementChild} from the field`);
    container.removeChild(container.firstElementChild);
    return;
}

createSquareGrid(field, 16);
