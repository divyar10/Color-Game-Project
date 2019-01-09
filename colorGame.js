var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
var mode = document.querySelectorAll(".mode");
var mssg = document.getElementById("message");
var pickedColor;

initialise();

function initialise(){
   setupMode();
   setupSquares();
   reset();
}

function setupMode(){
    for(var i = 0; i < mode.length; i++){
		mode[i].addEventListener("click",function(){
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
		   squares[i].addEventListener("click",function(){
			   var clickedColor = this.style.backgroundColor;
			   
			   if(clickedColor === pickedColor){
				   mssg.textContent = "Correct!";
				   resetBtn.textContent = "Play Again?";
				   changeColors(clickedColor);
				   h1.style.backgroundColor = clickedColor;
			   }else{
				   this.style.backgroundColor = "#232323";
				   mssg.textContent = "Try Again";
               }
		   });
	}
}

function reset(){
	  colors = genColors(numSquares);
	  pickedColor = pickColor();
	  resetBtn.textContent = "New Colors";
	  colorDisplay.textContent = pickedColor;
      mssg.textContent = "";
	  for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	  }
	  h1.style.backgroundColor = "steelblue";
}

resetBtn.addEventListener("click",function(){
	reset();
});

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function genColors(num){
	var arr= [];
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r +", " + g +", " + b +")";
}


