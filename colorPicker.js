var clickedColor;

var squares = document.querySelectorAll(".square");

var currentMode = squares.length;

var colors = generateRandomColors(currentMode);

var picked = pickedColor(currentMode);

var displayColor = document.querySelector("#displayColor");

var messageDisplay = document.querySelector("#message");

var gameTitle = document.querySelector("#gameTitle");

var newColorsButton = document.querySelector("#spanNewColor");

displayColor.innerHTML = picked;

// var easyModeButton = document.querySelector("#easyMode");

// var hardModeButton = document.querySelector("#hardMode");
var modes = document.querySelectorAll(".mode");

init();

function init(){
	setMode(currentMode);
	setupEvent();
}
function setupEvent(){
modes.forEach(function(mode){
	mode.addEventListener("click",function(){
		for(var i = 0; i<modes.length;i++){
			modes[i].classList.remove("selected");
		}
		this.classList.add("selected");
		this.textContent === "EASY" ? currentMode = 3: currentMode = squares.length;
		setMode(currentMode);
	})
})
}

// easyModeButton.addEventListener("click", function(){
// 	easyModeButton.classList.add("selected");
// 	hardModeButton.classList.remove("selected");
// 	easyModeIsClicked();
// })

newColorsButton.addEventListener("click", function(){
	gameTitle.style.backgroundColor = "steelblue";
	setMode(currentMode);
})

// hardModeButton.addEventListener("click", function(){
// 	hardModeButton.classList.add("selected");
// 	easyModeButton.classList.remove("selected");
// 	hardModeIsClicked();
// })


// function hardModeIsClicked(){
// 	currentMode = 6;
// 	setMode(currentMode);

// }

// function easyModeIsClicked(){
// 	currentMode = 3;
// 	setMode(currentMode);
// }

function setMode(num){

	var numberOfSquare = Number(num);

	gameTitle.style.backgroundColor = "steelblue";

	spanNewColor.textContent = "NEW COLORS";

	colors = generateRandomColors(numberOfSquare);

	picked = pickedColor(numberOfSquare);

	displayColor.innerHTML = picked;

	setupSquares(numberOfSquare);

	messageDisplay.innerHTML = "";

	if(num === 3){
		for(var i = 3; i< squares.length;i++){
			squares[i].style.display = "none";
		}
	}
}

function setupSquares(numberOfSquare) {
	for(var i = 0; i< numberOfSquare;i++){
		squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener("click", function(){
			clickedColor = this.style.backgroundColor;
			squareIsClicked(this);
		})
	squares[i].style.display = "";
	}	
}

function generateColor() {
	var red = parseInt(Math.random() * 256);
	var blue = parseInt(Math.random() * 256);
	var green = parseInt(Math.random() * 256);
	while(red === 35 && blue === 35 && green === 35){
		generateColor();
	}
	return "rgb("+red+", "+blue+", "+green+")";
}


function pickedColor(num) { 
	var randomSquare = Math.floor(Math.random() * num);
	return colors[randomSquare];
}

function squareIsClicked(square){
		clickedColor = square.style.backgroundColor;
		if(clickedColor === picked){
			correctColorIsClicked(clickedColor);
			messageDisplay.innerHTML = "Correct";
			newColorsButton.innerHTML = "Play Again?"
		}
		else {
			square.style.backgroundColor = "rgb(35, 35, 35)";
			square.style.display = "block";
			messageDisplay.innerHTML = "Try Again";
		}
	}
	
function generateRandomColors(num){
	var colors = [];
	for(var i = 0; i < num; i++){
		colors.push(generateColor());
	}
	return colors
}
function correctColorIsClicked(correctColor){
	gameTitle.style.backgroundColor = correctColor;
	squares.forEach(function(square){
		square.style.background = correctColor;
		square.style.display = "block";
	})
}
