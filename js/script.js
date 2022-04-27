// form elements
let elForm = document.querySelector(".site-form");
let elSelectDough = document.querySelector(".dough-select");
let elSizeBox = document.querySelector(".size-select");
let elIngredientsList = document.querySelector(".ingredients-list");
let elAdditionsList = document.querySelector(".additions-list");

// selected and checked elements
let elSelectedDough = document.querySelector(".selected-dough");
let elSelectedSize = document.querySelector(".selected-size");
let elCheckedIngredientsList = document.querySelector(".checked-ingredients-list");
let elCheckedAdditionsList = document.querySelector(".checked-additions-list ");

// arrays
let doughs = ["Yupqa", "O'rtacha", "Qalin"];
let sizes = ["25 sm", "30 sm", "35 sm"];
let ingredients = ["Pomidor", "Bodring", "Kurka go'shti", "Qo'ziqorin", "Zaytun", "Qazi"];
let additions = ["Achchiq", "Pishloqli"];
let checkedIngredients = [];
let checkedAdditions = [];

// dough select append option
for (let i = 0; i < doughs.length; i++){
  let newOption = document.createElement("option");
  newOption.textContent = doughs[i];
  newOption.value = doughs[i];
  elSelectDough.append(newOption);
}
// size-box append input(radio)
for (let j = 0; j < sizes.length; j++){
  let newInput = document.createElement("input");
  let newLabel = document.createElement("label");
  newInput.setAttribute('type', 'radio');
  newInput.setAttribute('name', 'size');
  newLabel.setAttribute('class', 'fs-5 fw-bold text-warning');
  newInput.setAttribute('class', 'me-2');
  newInput.value = sizes[j];
  newLabel.append(newInput, sizes[j]);
  elSizeBox.append(newLabel);

  if (newInput.value == sizes[1]){
    newInput.checked = true;
  }
}
//ingredientslist append items 
for (let k = 0; k < ingredients.length; k++){
  let newInputCheck = document.createElement("input");
  let newLabelCheck = document.createElement("label");
  let newLi = document.createElement("li");
  newInputCheck.setAttribute('type', 'checkbox');
  newInputCheck.setAttribute('class', 'me-3');
  newInputCheck.setAttribute('name', 'ingredients');
  newLabelCheck.setAttribute('class', 'fs-5 fw-bold text-warning');
  newLi.setAttribute('class', 'w-50');
  newInputCheck.value = ingredients[k];
  newLabelCheck.append(newInputCheck, ingredients[k]);
  newLi.append(newLabelCheck);
  elIngredientsList.append(newLi);
}
// additionslist append items
for (let l = 0; l < additions.length; l++){
  let newCheckInput = document.createElement("input");
  let newCheckLabel = document.createElement("label");
  let newLiAdd = document.createElement("li");
  newCheckInput.setAttribute('type', 'checkbox');
  newCheckInput.setAttribute('class', 'me-3');
  newCheckInput.setAttribute('name', 'additions');
  newCheckLabel.setAttribute('class', 'fs-5 fw-bold text-warning');
  newLiAdd.setAttribute('class', 'w-50');
  newCheckInput.value = additions[l];
  newCheckLabel.append(newCheckInput, additions[l]);
  newLiAdd.append(newCheckLabel);
  elAdditionsList.append(newLiAdd);
}

// selected dough
elSelectedDough.textContent = elSelectDough.value;

elSelectDough.addEventListener("change", function(e){
  elSelectedDough.textContent = elSelectDough.value;
})

// checked size
elSelectedSize.textContent = sizes[1];

elSizeBox.addEventListener("change", function(e){
  elSelectedSize.textContent = e.target.value;
})

// checked ingredients
elIngredientsList.addEventListener("change", function(e){
  if (e.target.checked == true){
    checkedIngredients.push(e.target.value);
  }else{
    checkedIngredients.splice(checkedIngredients.indexOf(e.target.value), 1);
  }

  elCheckedIngredientsList.innerHTML = null;
  for(i = 0; i < checkedIngredients.length; i++){
    let newItem = document.createElement("li");
    newItem.textContent = checkedIngredients[i];
    newItem.setAttribute('class', 'ms-2 fs-6 fw-bold text-warning')
    elCheckedIngredientsList.append(newItem);
  }
})

// checked additions
elAdditionsList.addEventListener("change", function(e) {
  if (e.target.checked == true){
    checkedAdditions.push(e.target.value);
  }else{
    checkedAdditions.splice(checkedAdditions.indexOf(e.target.value), 1);
  }

  elCheckedAdditionsList.innerHTML = null;
  for(let i = 0; i < checkedAdditions.length; i++){
    let newItemAdd = document.createElement("li");
    newItemAdd.textContent = checkedAdditions[i];
    newItemAdd.setAttribute('class', 'ms-2 fs-6 fw-bold text-warning')
    elCheckedAdditionsList.append(newItemAdd);
  }
})