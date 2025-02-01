const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const subbtn = document.getElementById("subbtn");
const result = document.getElementById("result");
let count = 0;

increasebtn.onclick = function(){
    count ++;
    contlabel.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    contlabel.textContent = count;
}

decreasebtn.onclick = function(){
    count --;
    contlabel.textContent = count;
}

subbtn.onclick = function(){
    console.log(count);

    if(count == 0){
        console.log('you just born');
        result.textContent = 'You just born';
        result.style.color = 'red';
    }

    else if(count < 0){
        console.log('Born first');
        result.textContent = 'Born first';
        result.style.color = 'red';
    }

    else if(count < 18){
        console.log('You are minor');
        result.textContent = 'You are minor';
        result.style.color = 'red';
    }

    else if(count >= 18){
        console.log('You can enter');
        result.textContent = 'You can enter';
        result.style.color = 'green';
    }

}

