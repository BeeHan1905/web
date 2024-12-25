const inputbox = document.getElementById("inputbox");
const Listcontainer = document.getElementById("Listcontainer");
function addTask() {
    if (inputbox.value === '') {
        alert("NAPISHI ZADACHU");  
    } else {
        let li = document.createElement("li");  
        li.innerHTML = inputbox.value;  
        Listcontainer.appendChild(li);  

        let span = document.createElement("span");  
        span.innerHTML = "\u00d7";  
        li.appendChild(span);  
    }
    inputbox.value = "";
    saveData();
}
Listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");  
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();  
        saveData();
    }
}, false);
function saveData() {
    localStorage.setItem("data", Listcontainer.innerHTML);  // Сохраняем HTML содержимое списка
}
function showTask() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        Listcontainer.innerHTML = savedData;  
    }
}
showTask();
