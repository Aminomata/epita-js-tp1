import list from "./actions/list";
import add from "./actions/add";
import remove from "./actions/remove";

const picturesGridElement = document.getElementById("pictures-grid");
const pictureInputElement = document.getElementById("picture-url-input");
const pictureAddButtonElement = document.getElementById("picture-add-button");

const pictureItemTemplate = document.getElementById("picture-item-template");

const getInputContents = () => pictureInputElement.value;
const clearInputContents = () => (pictureInputElement.value = "");

const addPictureHandler = () => {
  const url = getInputContents();

  add(url);
  // FIXME: bonus, trim eventual whitespaces and validate content

  clearInputContents();
};

const refreshGrid = () => {
  const items = list();

  const fragment = document.createDocumentFragment();

  items.forEach((value, index) => {
    const clone = document.importNode(pictureItemTemplate.content, true);

    const imgElement = clone.querySelector(".picture-item-image");

    imgElement.src = value;

    const deleteButtonElement = clone.querySelector(".picture-item-delete-button");

    deleteButtonElement.addEventListener("click", () => {
      remove(index);
      refreshGrid();
    });

    fragment.appendChild(clone);
  });

  picturesGridElement.innerHTML = "";
  picturesGridElement.appendChild(fragment);
};

refreshGrid();

pictureAddButtonElement.addEventListener("click", () => {
  addPictureHandler();
  refreshGrid();
});
