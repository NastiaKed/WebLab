import {getTables,getFoundTables} from "./index.mjs";

const nameInput = document.getElementById("name-input");
const weightInput = document.getElementById("weight-input");
const priceInput = document.getElementById("price-input");
const itemsContainer = document.getElementById("items-to-list");
const manageCheckBox = document.getElementById("checkbox");

const editContainer = document.getElementById("edit-container");
const editName = document.getElementById("edit_input");
const editWeight = document.getElementById("edit_weight");
const editPrice = document.getElementById("edit_price");
const saveEditButton = document.getElementById("save_button");

export const getInputValue = () => {
    if (nameInput.value === "" || weightInput.value === "" || priceInput.value === "") {
        alert("fields need to be filled");
        return;
    }
    return {
        name: nameInput.value,
        weight: weightInput.value,
        priceAmount: priceInput.value
    }
}

export const getEditedInputValue = () => {
    if (editName.value === "" || editWeight.value === "" || editPrice.value === "") {
        alert("fields need to be filled");
        return;
    }
    return {
        name: editName.value,
        weight: editWeight.value,
        priceAmount: editPrice.value
    }
}


export const clearInputs = () => {
    nameInput.value = "";
    weightInput.value = "";
    priceInput.value = "";
}

const itemTemplate = ({id, name, weight, priceAmount}) =>
    `<li class="table-card" id="${id}">
                    <h5>table</h5>
                    <span>${name}</span> <br>
                    <span>${weight}</span> <br>
                    <span>${priceAmount}</span> <br>
                    <button class="edit-button" id="edit-button_${id}">Edit</button>
    </li>`;

let selectedItemID = null;
export const addItemToPage = ({id, name, weight, priceAmount}) => {
    itemsContainer.insertAdjacentHTML("afterbegin",
        itemTemplate({id, name, weight, priceAmount}))
    const editButton = document.getElementById(`edit-button_${id}`)
    editButton.onclick = function () {
        editContainer.style.display = "flex";
        selectedItemID = id;
        fillInputs({name, weight, priceAmount});
    }
}
saveEditButton.onclick = function () {
    let editItem = getTables().find(i => i.id === selectedItemID);
    if (editItem) {
        const {name, weight, priceAmount} = getEditedInputValue();
        editItem.name = name;
        editItem.weight = weight;
        editItem.priceAmount = priceAmount;
    }
    renderItems(getFoundTables());
    editContainer.style.display = "none";
}


const fillInputs = ({name, weight, priceAmount}) => {
    editName.value = name;
    editWeight.value = weight;
    editPrice.value = priceAmount;
}


export const renderItems = (items) => {
    itemsContainer.innerHTML = "";
    let sortedItems = items.slice()
    if (manageCheckBox.checked) {
        sortedItems.sort((a, b) => b.priceAmount - a.priceAmount);
    }
    for (const item of sortedItems) {
        addItemToPage(item)
    }
}