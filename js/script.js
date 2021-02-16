function changeText(){ 
	var current_val = document.getElementById('my_description').innerText 
	if (current_val == "Teacher"){ 
		document.getElementById('my_description').innerHTML = "Student" 
	}
	else{ 
		document.getElementById('my_description').innerHTML = "Teacher" 
	} 
}