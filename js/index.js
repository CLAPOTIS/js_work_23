var num=document.getElementsByClassName("num");
var content_li=document.getElementsByClassName("content_li");
for(var i=0;i<num.length;i++){
	num[i].onclick=function(){
		initial();
		var j=0;
		while(j<num.length){			
			j=add(j);			
		}
	}
}
function initial(){
	for(var i=0;i<num.length;i++){
		num[i].style.top="0px";	
		num[i].style.opacity=1;	
		content_li[i].style.backgroundColor="#fff";	
	}
}
function add(j){	
	moveElement(j);
	hiddenNum(j);
	changeColor(j); 
	j++;	
	movement3=setTimeout("add("+j+")",100);
	if(j==num.length){			
		clearTimeout(movement3);
		setTimeout("initial()",500);
	}				
}
function moveElement(j){
	var final_y=-150;
	var ypos=parseInt(num[j].style.top);	
	if(ypos==final_y){
		return true;
	}
	if(ypos>final_y){
		ypos=ypos-5;
	}	
	num[j].style.top=ypos+"px";	
	movement1=setTimeout("moveElement("+j+")",10);
}
function hiddenNum(j){
	var final_o=0;
	var opacity=num[j].style.opacity;
	if(opacity<=final_o){
		return true;
	}
	if(opacity>final_o){
		opacity=opacity-0.03;
	}
	num[j].style.opacity=opacity;
	movement2=setTimeout("hiddenNum("+j+")",10);	
}
function changeColor(j){
	content_li[j].style.backgroundColor="#FFF5EE";
}