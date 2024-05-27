function changeMode(){
    changeText();
    changeTheme();
}

function changeText(){
    if(body.classList.contains("dark-mode")){
        modeselector.innerHTML = "Ligth Mode";
        h1.innerHTML = "Dark Mode" + " ON";
        return;
    }

    modeselector.innerText = "Dark Mode";
    h1.innerText = "Ligth Mode" + " ON";
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
