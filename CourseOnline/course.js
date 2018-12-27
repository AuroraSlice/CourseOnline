var indexNum =1;
var xh = null;

var display = function(){
		var x = document.getElementById("DownPage");
		x.style.display = "block";

	}

var hide = function(){
		var x = document.getElementById("DownPage");
		x.style.display = "none";

	}

function showPic(n){   //轮播函数

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


function currentSlide(n) {     //dot选择当前图片
			window.indexNum=n;
  			showPic(indexNum);
  			return indexNum;
	}


function picPlus(s){    //下一张图片
		window.indexNum+=s;
		showPic(indexNum);
	}


function autoPlay(){     //自动播放
    xh = setInterval(function(){
        indexNum++;
        var elemts = document.getElementsByClassName("Slice");
        if(indexNum >= elemts.length){
            indexNum = 0;
        }
        showPic(indexNum);
        
        
    },5000);
}


function right_content(){
	var changeColor = document.getElementsByClassName("container_right");
	for(var i=0;i<changeColor.length;i++){
		changeColor[i].style.color = "grey";
		changeColor[i].style.background = "#F8F8FF";
	}
	var changeColor2 = document.getElementsByClassName("active_q");
	for (var i = 0;i<changeColor2.length;i++) {
		changeColor2[i].style.background = "#F8F8FF";
	}
	this.style.color = "#5CACEE";
	this.style.background = "white";
	let left = this.childNodes;
	left[1].style.background ="#5CACEE";
	
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
	autoPlay();
	var picPionter = document.getElementsByClassName("ppicture");
	for (var i = 0; i<4;i++) {
		picPionter[i].addEventListener("mouseover", function(){clearInterval(xh);});
		picPionter[i].addEventListener("mouseout", autoPlay);
	}


	var right_content_show = document.getElementsByClassName("container_right");
	for(var i=0;i<right_content_show.length;i++){
		right_content_show[i].addEventListener("mouseover",right_content);
	}

	
}




