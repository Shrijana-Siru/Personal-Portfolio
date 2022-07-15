function validationform(){
	var firstname = document.forms["messageForm"]["firstname"].value;
	var lastname = document.forms["messageForm"]["lastname"].value;
	var gender = document.forms["messageForm"]["gender"].value;
	var message = document.forms["messageForm"]["message"].value;

	if (firstname == "" || lastname == "" || message == ""){
		alert("Empty fields found. Please fill the form.");
	}
	else {
		alert("Thank you for the feedback.");
	}

}