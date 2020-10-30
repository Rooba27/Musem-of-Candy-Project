var numsquares=6;
var pickedcolor;
var colors = [];
var h1 = document.getElementById("rgb");
var resetbtn = document.getElementById("reset");
var squares = document.getElementsByClassName("squares");
var modes= document.getElementsByClassName("modeset");
var msg = document.querySelector("#msg");
var content = document.querySelector(".content");

 init();
  function init(){
      setupmodes();
      setupsquares();
      reset();
 }

 function setupmodes(){
     for (var i=0; i<modes.length; i++)
    {
      modes[i].addEventListener("click", function(){        
        modes[0].classList.remove("selected");
		modes[1].classList.remove("selected");
        this.classList.add("selected");	
        if(this.textContent === modes[0].textContent){
            numsquares=3;
        }else{
               numsquares=6;     }   
        reset();
        
      });
    }   
 }


 function generatecolor(){
    var r = Math.floor(Math.random() * 256 );
    var g = Math.floor(Math.random() * 256 );
    var b = Math.floor(Math.random() * 256 );
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function setColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(generatecolor());
	}
	//return that array
	return arr;
}

 function setupsquares(){        
     pickedcolor = pickColor();
     for( var i=0; i<squares.length ; i++){
         squares[i].addEventListener("click", function(){
             var clickcolor = this.style.background;
             h1.textContent=pickedcolor;
             if(pickedcolor === clickcolor){
                msg.textContent = "correct!!!"; 
                resetbtn.textContent = "Play Again?";
                content.style.background = pickedcolor;
                colorchanges(clickcolor);
             } else {                
                 this.style.background = "#181818";
                 msg.textContent = "Try again"; 
             }
         });
     }
}

resetbtn.addEventListener("click", function(){
    reset();
});

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

 function reset(){
    colors = setColors(numsquares);
	//pick a new random color from array
	pickedcolor = pickColor();
	//change colorDisplay to match picked Color
	h1.textContent = pickedcolor;
	resetbtn.textContent = "New Colors";
	msg.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	content.style.background = "steelblue";

}



function colorchanges(color){
     for(var i=0; i<squares.length; i++){
         squares[i].style.background =color;
     }
}

 

 

 