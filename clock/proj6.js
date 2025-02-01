let darkmode = localStorage.getItem("lightmode");
const themeSwitch = document.getElementById("theme-switch");

function enablelightmode(){
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode','active')
    themeSwitch.textContent = "🌙";
}

function disablelightmode(){
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode',null)
    themeSwitch.textContent = "☀️";
}

if(darkmode === 'active') enablelightmode() 

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("lightmode");
    darkmode !== "active" ? enablelightmode() : disablelightmode()
});

// Digital clock program

function updateClock(){

    const now = new Date();
    let hours = now.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock,1000);