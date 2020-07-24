var sec=0;
var min=0;
var timeSec=0;
var timeMin=0;
var interval=0;
var isStart= false;
var time=document.querySelector("h1");
var button=document.querySelector("#btn");

function timer(){
    sec++;
    if(sec == 60){
        sec=0;
        min++;
    }

    if(sec < 10){
        timeSec= "0" + sec.toString();
    }else{
        timeSec=sec;
    }

    if(min<10){
        timeMin= "0"+ min.toString();
    }else{
        timeMin= min;
    }

    if(min==5){
        stop();
    }

    time.innerHTML= timeMin + ":" + timeSec;
};

button.addEventListener("click", function(){
    if(button.textContent=== "Reset"){
        reset();
    }else if(isStart){
        start();
    }else{
        pause();
    }
});

function start(){
    window.clearInterval(interval);
    button.textContent= "Start";
    isStart= false;
};

function pause(){
    interval=window.setInterval(timer, 1000);
    button.textContent= "Pause";
    isStart= true;
}

function stop(){
    button.textContent= "Reset";
    window.clearInterval(interval);
    time.classList.toggle("red");
};

function reset(){
    interval=0;
    sec=0;
    min=0;
    isStart= false;
    button.textContent= "Start";
    time.innerHTML= "00:00";
    time.classList.toggle("red");
};