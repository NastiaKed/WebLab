// import { onDragNDrop } from "./drag_n_drop"

const titleInput = document.getElementById("title_input");
const priceInput = document.getElementById("price_input");
const itemsContainer = document.getElementById("items_container");
const materialInput = document.getElementById("material_input");
const manageCheckBox = document.getElementById("checkbox");

const getItemId = (id) => 'item-${id}';

const itemTemplate = ({ id, title, prs, mat }) => `
<li id="${getItemId(id)}" class="card mb-3 item-card" draggable="true">
    <img
        src="https://www.dybok.com.ua/image/38391/stil-pismovij-biu-1d1s120-top-miks-119101-gallery.jpg?v=0.1"
        class="item-container__image card-img-top" alt="card">
    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class=" card-text">${prs}</p>
        <p class=" card-text">${mat}</p>
    </div>
</li>`;


export const clearInputs = () => {
    titleInput.value = "";

    priceInput.value = "";

    materialInput.value = "";
};

export const addItemToPage = ({ id, title, prs, mat }) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate ({ id, title, prs, mat })
    );
};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
};

export const getInputValues = () => {
    return {
        title: titleInput.value,
        price: priceInput.value,
        material: materialInput.value,
    };
};

export const renderItems = (items) => {
    itemsContainer.innerHTML = "";
    let sortedItems = items.slice()
    if(manageCheckBox.checked){
        sortedItems.sort((a,b) => a.prs - b.prs);
    }
    for (const item of sortedItems) {
        addItemToPage(item)
    }
}