var cell=document.querySelectorAll("td");
var box1;
var box2;

init();
function init(){
	box1=Math.floor(Math.random()*cell.length);
    box2=Math.floor(Math.random()*cell.length);
    if(box1===box2){
        box2=Math.floor(Math.random()*cell.length);
    }
    cell[box1].style.backgroundColor= "purple";
    cell[box2].style.backgroundColor= "#8ef5f0";
}

cell[box1].addEventListener("click", function(){
    document.onkeydown = checkKey; 
});

cell[box2].addEventListener("click", function(){
    document.onkeydown = check;
});

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
      var index=box1-6;
      if(index===box2){
          return;
      }else if(index<0){
          return;
      }else{
          cell[box1].style.backgroundColor= "pink";
          cell[index].style.backgroundColor= "purple";
          box1=index;
      } 
    } else if (e.keyCode == '40') {
      var index=box1+6;
      if(index===box2){
          return;
      }else if(index>35){
          return;
      }else{
          cell[box1].style.backgroundColor= "pink";
          cell[index].style.backgroundColor= "purple";
          box1=index;
      } 
    } else if (e.keyCode == '37') {
      var index=box1-1;
      if(index===box2){
          return;
      }else if(index<0){
          return;
      }else{
          cell[box1].style.backgroundColor= "pink";
          cell[index].style.backgroundColor= "purple";
          box1=index;
      } 
    } else if (e.keyCode == '39') {
      var index=box1+1;
      if(index===box2){
          return;
      }else if(index>35){
          return;
      }else{
          cell[box1].style.backgroundColor= "pink";
          cell[index].style.backgroundColor= "purple";
          box1=index;
      } 
    }
};

function check(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
      var index=box2-6;
      if(index===box1){
          return;
      }else if(index<0){
          return;
      }else{
          cell[box2].style.backgroundColor= "pink";
          cell[index].style.backgroundColor= "#8ef5f0";
          box2=index;
      } 
    } else if (e.keyCode == '40') {
      var index=box2+6;
      if(index===box1){
          return;
      }else if(index>35){
          return;
      }else{
          cell[box2].style.backgroundColor= "pink";
          cell[index].style.backgroundColor= "#8ef5f0";
          box2=index;
      } 
    } else if (e.keyCode == '37') {
      var index=box2-1;
      if(index===box1){
          return;
      }else if(index<0){
          return;
      }else{
          cell[box2].style.backgroundColor= "pink";
          cell[index].style.backgroundColor= "#8ef5f0";
          box2=index;
      } 
    } else if (e.keyCode == '39') {
      var index=box2+1;
      if(index===box1){
          return;
      }else if(index>35){
          return;
      }else{
          cell[box2].style.backgroundColor= "pink";
          cell[index].style.backgroundColor= "#8ef5f0";
          box2=index;
      } 
    }
};




