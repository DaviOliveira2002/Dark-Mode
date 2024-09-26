function changeMode(){
    changeText();
    changeTheme();
}

function changeText(){
    if(body.classList.contains("dark-mode")){
        modeselector.innerHTML = "Dark Mode";
        h1.innerHTML = "Ligth Mode" + " ON";
        return;
    }

    modeselector.innerText = "Ligth Mode";
    h1.innerText = "Dark Mode" + " ON";
}

function changeTheme(){
    body.classList.toggle("dark-mode");
    modeselector.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");
}

const body = document.querySelector("body");
const modeselector = document.querySelector("#mode-selector");
const h1 = document.querySelector("#page-title");

modeselector.addEventListener("click", changeMode);
