
const lightModeBtn = document.querySelector(".light-mode-btn");
const darkModeBtn = document.querySelector(".dark-mode-btn");

lightModeBtn.addEventListener("click", setDarkMode );
darkModeBtn.addEventListener("click", setLigtMode );

function setDarkMode(){
    __setUserTheme("dark");
}

function setLigtMode(){
    __setUserTheme("light");
}


