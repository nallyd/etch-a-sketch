console.log("We're live!");

const grid = document.querySelector(".grid");

function createSquareGrid(container, size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");

        for (let j = 0; j < size; j++) {
            const box = document.createElement("div");
            box.setAttribute("class", "grid-box");
            row.appendChild(box);
        }

        container.appendChild(row);
    }
}

createSquareGrid(grid, 16);
