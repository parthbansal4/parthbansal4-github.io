var sec=0;
var min=0;
var displaySec=0;
var displayMin=0;
var interval=0;
var isStart= false;
var display=document.querySelector("h1");
var button=document.querySelector("#btn");

function timer(){
    sec++;

    if(sec == 60){
        sec=0;
        min++;
    }

    if(sec < 10){
        displaySec= "0" + sec.toString();
    }else{
        displaySec=sec;
    }

    if(min<10){
        displayMin= "0"+ min.toString();
    }else{
        displayMin= min;
    }

    if(min==5){
        stop();
    }

    display.innerHTML= displayMin + ":" + displaySec;
};

button.addEventListener("click", function(){
    if(button.textContent=== "Reset"){
        interval=0;
        sec=0;
        min=0;
        isStart= false;
        button.textContent= "Start";
        display.innerHTML= "00:00";
        display.classList.toggle("red");
    }else 
    if(isStart){
        window.clearInterval(interval);
        button.textContent= "Start";
        isStart= false;
    }else{
        interval=window.setInterval(timer, 1000);
        button.textContent= "Pause";
        isStart= true;
    }
});

function stop(){
    button.textContent= "Reset";
    window.clearInterval(interval);
    display.classList.toggle("red");
};