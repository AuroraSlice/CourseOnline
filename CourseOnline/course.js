var indexNum =1;

var display = function(){
		var x = document.getElementById("DownPage");
		x.style.display = "block";

	}

var hide = function(){
		var x = document.getElementById("DownPage");
		x.style.display = "none";

	}

function showPic(n){

		var elemts = document.getElementsByClassName("Slice");
		for (var i = 0; i < elemts.length; i++) {
			elemts[i].style.display = "none";
		}
		if(n>elemts.length){
			n=n%4;
		}
		if(n<1){
			n=elemts.length;
		}
		var dots = document.getElementsByClassName("dot");
		for (i = 0; i < dots.length; i++) {
     		 dots[i].className = dots[i].className.replace(" active", "");
  		}

		elemts[n-1].style.display = "block";
		dots[n-1].className += " active";
}


function currentSlide(n) {
			window.indexNum=n;
  			showPic(indexNum);
  			return indexNum;
	}


function picPlus(s){
		window.indexNum+=s;
		showPic(indexNum);
	}

	
window.onload=function(){
	var x = document.getElementsByClassName("FirstMenu")[1];
	x.addEventListener("mouseover",display,true);
	x.addEventListener("mouseout",hide,true);
	var y = document.getElementsByClassName("SecondMenu");
	for(var i=0;i<3;i++){
		y[i].addEventListener("mouseover",display,true);
		y[i].addEventListener("mouseout",hide,true);
	}


	
	showPic(indexNum);
	
	
}




