const boxContainerEl = document.getElementById("boxContainer");
console.log(boxContainerEl);


for (let i = 0; i < 100; i++) {
    let boxItem = document.createElement("div");
    boxItem.classList.add("box");
    boxItem.innerText = i + 1;
    boxContainerEl.append(boxItem);
}

console.log(colItem);