var numSquares=6;
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeBtn=document.querySelectorAll(".modeBtn");

function init(){
	for(var i=0;i<modeBtn.length;i++){
		modeBtn[i].addEventListener("click",function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent ==="Easy"? numSquares = 3: numSquares = 6;
			reset();
		});
	}
	for(var i=0;i<squares.length;i++){
		squares[i].addEventListener("click",function(){
			var clickedColor=this.style.backgroundColor;
			if(clickedColor===pickedColor){
				messageDisplay.textContent="Correct!";
				resetButton.textContent="Play Again?";
				changeColor(clickedColor);
				h1.style.backgroundColor=clickedColor;
			}else{
				messageDisplay.textContent="Try Again";
				this.style.backgroundColor="#232323";
			}
		});
	}
	reset();
};

init();

function reset(){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor="#232323";
	resetButton.textContent="New Colors";
	h1.style.backgroundColor="steelblue";
}

resetButton.addEventListener("click",function(){
	reset();
});

function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr[i]=randomColor();
	}
	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r+", "+g+", "+b+")";
}