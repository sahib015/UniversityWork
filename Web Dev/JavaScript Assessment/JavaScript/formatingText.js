function bold(id){
	var background= document.getElementById(boldBtn);
	var e= document.getElementById(id);
		if(e.style.fontWeight=="bold"){
			e.style.fontWeight="normal";
		}
		else{
			e.style.fontWeight="bold";
	
		}
}
		
function italics(id){
	var e= document.getElementById(id);
	if (e.style.fontStyle=="italic"){
		e.style.fontStyle="normal";
	}else{
		e.style.fontStyle="italic";
	}
	
}

function underline(id){
	var e= document.getElementById(id);
	if(e.style.textDecoration == "underline"){
		e.style.textDecoration = "none"
	}
	else{
		 e.style.textDecoration = "underline";
	}
}

function changeColor() { 
var colour = document.getElementById("cmb_colour");
 var colourVal = colour.options[colour.selectedIndex].value;
 var colortxt = colour.options[colour.selectedIndex].text; 
 var e= document.getElementById('text');
 
 e.style.color=colortxt; 
 } 
 
 function changeFont(){
	 var font= document.getElementById("cmb_font");
	 var fontVal= font.options[font.selectedIndex].value;
	 var fontTxt= font.options[font.selectedIndex].text;
	 var e= document.getElementById("text");
	 
	 e.style.fontFamily=fontTxt;
 }
 
function changeTextBackground(){

	var r= document.rgb_form.txt_red.value;
	var g= document.rgb_form.txt_green.value;
	var b= document.rgb_form.txt_blue.value;
	var e= document.getElementById("text");
	
	if(isNaN(r) || r < 0 || r > 255){
		alert(r +" is an invalid number");
	}
		else if(isNaN(g) || g < 0 || g > 255){
		alert(g +" is an invalid number");
	}
		else if(isNaN(b) || b < 0 || b > 255){
		alert(b +" is an invalid number");
	}
	else{
	e.style.backgroundColor="rgb(" + r + "," + g + "," + b + ")"; 
}
}

