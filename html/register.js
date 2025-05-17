let fname = document.getElementById("firstname");
let lname = document.getElementById("lastname");
let email = document.getElementById("emailaddress");
let selectSex = "";
let what = document.getElementsByName("sex")
let why = document.getElementById("reason");

function signUp() {
	
	for( var x = 0; x<what.length; x++){
		if(what[x].checked){
			selectSex = selectSex + what[x].value;
			break;
		}
	}
	
	localStorage.setItem("firstname", fname.value);
	localStorage.setItem("lastname", lname.value);
	localStorage.setItem("emailaddress", email.value);
	localStorage.setItem("gen", selectSex);
	localStorage.setItem("reason", why.value);
	
	console.log(selectSex);
	
	window.location.href= "profile.html";
	
	return false;
}

function info(){
	
	document.getElementById("nameF").innerHTML= "First Name: " +  localStorage.getItem("firstname");
    document.getElementById("nameL").innerHTML= "Last Name: " + localStorage.getItem("lastname");
    document.getElementById("emailAdd").innerHTML= "Email Address: " + localStorage.getItem("emailaddress");
    document.getElementById("which").innerHTML= "Sex: " + localStorage.getItem("gen");
    document.getElementById("support").innerHTML= "Why I support this campaign: " + localStorage.getItem("reason");
}


			
		
	
