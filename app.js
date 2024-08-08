const title = document.querySelector("h1");
const changeHeaderBtn = document.querySelector("#btn1");
const addToListBtn = document.querySelector("#btn2");

changeHeaderBtn.addEventListener("click", changeColor);
addToListBtn.addEventListener("click", addToList);

title.textContent = "Javascript 102";

function changeColor(){
    if(title.style.color === "black"){
        title.style.color = "blue";
    } else {
        title.style.color = "black";
    }
}

function addToList(){
    const myList = document.querySelector("#myList");
    const newListElement = document.createElement("li");
    newListElement.textContent = `List item ${myList.children.length+1}`;
    myList.appendChild(newListElement);
}
