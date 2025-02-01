const congo = document.getElementById("congo");

let minnumber = 1;
let maxnumber = 100;
let answer = Math.floor(Math.random() * (maxnumber - minnumber + 1)) + minnumber;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minnumber} - ${maxnumber}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert(`Please enter a valid number`);
    }

    else if(guess < minnumber || guess > maxnumber){
        window.alert(`Please enter a valid number`);
    }

    else{
        attempts++;
        if(guess < answer){
            window.alert(`Too Low! TRY AGAIN!`);
        }

        else if(guess > answer){
            window.alert(`Too HIGH! TRY AGAIN!`);
        }

        else{
            window.alert(`CORRECT! The answer was ${answer}. It Took you ${attempts} attempts.`);
            running = false;
            congo.textContent = "Congratulations for wining Nothing";
            congo.classList.add("congo");
        }
    }
}