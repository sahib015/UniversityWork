 function checkValidity(str){
	
	values= parseInt(str);

	
	if(isNaN(values) || values < 0 || values > 255){
		alert(values +" is an invalid number");
	}

}