import {
    addItemToPage,
    clearInputs,
    renderItemsList,
    getInputValues,
    renderItems
} from "./dom_until.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const checkbox = document.getElementById("checkbox");
const output = document.getElementById("count-output");
const countButton = document.getElementById("count-fuel-button");


let tables = [];

let foundTables = tables;

const addItem =({ title, prs, mat }) => {
    const generatedId = uuid.v1();

    const newItem = {
        id: generatedId,
        title,
        prs,
        mat,
    }

    tables.push(newItem);

    addItemToPage(newItem);
};

submitButton.addEventListener("click", (event) => {

    event.preventDefault();

    const { title, price, material } = getInputValues();

    clearInputs();

    addItem({
        title,
        prs: price,
        mat: material,
    });
});

findButton.addEventListener("click", () => {
        foundTables = tables.filter(h => 
            h.title.toLowerCase().search(findInput.value.toLowerCase()) !== -1);

    renderItemsList(foundTables);
});

cancelFindButton.addEventListener("click", () => {
    foundTables=tables;
    renderItemsList(tables);

    findInput.value = "";
});

checkbox.addEventListener("change",() =>{
    renderItems(foundTables);
})



countButton.addEventListener("click", () => {
    let count = 0;
    for (let table of foundTables){
        count += parseInt(table.prs);
    }
    output.textContent = count.toString();
})

renderItems(foundTables);
