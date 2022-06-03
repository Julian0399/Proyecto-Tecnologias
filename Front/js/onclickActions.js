function setStorage(){
	var user= document.getElementById("username").value;
	console.log(user);
	localStorage.setItem("username", user);
	
}