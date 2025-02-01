let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

function enabledarkmode(){
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode','active')
    themeSwitch.src = "Image/lightmode.png" 
}

function disabledarkmode(){
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode',null)
    themeSwitch.src = "Image/darkmode.png"
}

if(darkmode === 'active') enabledarkmode() 

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enabledarkmode() : disabledarkmode()
});