var currentPlayer = 1;
var plays = 0;
var b = document.querySelector("#board");
var c = document.querySelector("#container");
b.b0.addEventListener("click",turn);
b.b1.addEventListener("click",turn);
b.b2.addEventListener("click",turn);
b.b3.addEventListener("click",turn);
b.b4.addEventListener("click",turn);
b.b5.addEventListener("click",turn);
b.b6.addEventListener("click",turn);
b.b7.addEventListener("click",turn);
b.b8.addEventListener("click",turn);
function turn(){
	if(currentPlayer == 1 && this.value == ""){
		this.value = "X";
		this.style.color = "red";
		currentPlayer = 2;
		plays++;
		if(plays >= 5){
			win();
		}
	}
	else if (currentPlayer == 2 && this.value == ""){
		this.value = "O";
		this.style.color = "green";
		currentPlayer = 1;
		plays++;
		if(plays >= 5){
			win();
		}
	}
	console.log("plays = " + plays);
}
function win(){
	if(b.b0.value == b.b1.value && b.b1.value == b.b2.value && b.b0.value != ""){
		announcewin(b.b0.value);
	}
	else if(b.b3.value == b.b4.value && b.b4.value == b.b5.value && b.b3.value != ""){
		announcewin(b.b3.value);
	}
	else if(b.b6.value == b.b7.value && b.b7.value == b.b8.value && b.b6.value != ""){
		announcewin(b.b6.value);
	}
	else if(b.b0.value == b.b4.value && b.b4.value == b.b8.value && b.b0.value != ""){
		announcewin(b.b0.value);
	}
	else if(b.b0.value == b.b3.value && b.b3.value == b.b6.value && b.b0.value != ""){
		announcewin(b.b0.value);
	}
	else if(b.b1.value == b.b4.value && b.b4.value == b.b7.value && b.b1.value != ""){
		announcewin(b.b1.value);
	}
	else if(b.b2.value == b.b5.value && b.b8.value == b.b5.value && b.b2.value != ""){
		announcewin(b.b2.value);
	}
	else if(b.b2.value == b.b4.value && b.b6.value == b.b4.value && b.b2.value != ""){
		announcewin(b.b2.value);
	}
	else if(plays== 9){
		cats();
	}
}
function announcewin(winner){
	currentPlayer = -1;
	document.querySelector("#popup").innerHTML = '<img src="image/x.png" alt="x" id="x"><h2>' + winner + ' Wins!</h2>';
	document.querySelector("#x").addEventListener("click",hidePopup);
	c.style.display = "flex";
}
function cats(){
	c.style.display = "flex";
}
document.querySelector("#x").addEventListener("click",hidePopup);
function hidePopup(){
	c.style.display = "none";
}