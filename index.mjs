import {addItemToPage, clearInputs, getInputValue, renderItems} from "./utils.js"

const submitButton = document.getElementById("button-submit");
const findButton = document.getElementById("find-button");
const cancelFindButton = document.getElementById("cancel-find-button");
const findInput = document.getElementById("find-input");
const checkbox = document.getElementById("checkbox");
const output = document.getElementById("count-output");
const countButton = document.getElementById("count-fuel-button");

let tables = [];
let foundTables = tables;

export const getTables = () => {
    return tables;
}

export const getFoundTables = () => {
    return foundTables;
}

const addItem = ({name, weight, priceAmount}) => {

    const generatedId = uuid.v1();

    const newItem = {
        id: generatedId,
        name,
        weight,
        priceAmount
    }

    tables.push(newItem);
    addItemToPage(newItem)

}
submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const {name, weight, priceAmount} = getInputValue();

    clearInputs();

    addItem({
        name,
        weight,
        priceAmount
    })
})

findButton.addEventListener("click", () => {
    foundTables = tables.filter(h =>
        h.name.toLowerCase().search(findInput.value.toLowerCase()) !== -1);

    renderItems(foundTables);
})

cancelFindButton.addEventListener("click", () => {
    foundTables = tables;
    renderItems(tables);
    findInput.value = "";
})

checkbox.addEventListener("change",() =>{
    renderItems(foundTables);
})

countButton.addEventListener("click", () => {
    let count = 0;
    for (let table of foundTables){
        count += parseInt(table.weight);
    }
    output.textContent = count.toString();
})
