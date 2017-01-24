var loginForm = document.forms.loginForm,
		mail = loginForm.elements.mail,
		pass = loginForm.elements.pass,
	regForm = document.forms.regForm,
	regLink = document.querySelector(".reg_link"),
	logLink = document.querySelector(".log_link_2");
regLink.addEventListener("click",function(){
	regForm.style.display = "block";
	loginForm.style.display="none";
});
logLink.addEventListener("click",function(){
	regForm.style.display = "none";
	loginForm.style.display="block";
});
loginForm.addEventListener("submit",function(e){
	e.preventDefault();
});

//Mail
mail.addEventListener("keyup",function(){
	var parent = this.parentElement,
		valueMail = this.value.trim(),
		errPlaceholder = parent.querySelector(".msg");
		

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!re.test(valueMail) ){
    	errPlaceholder.textContent = "Cant be empty";
    }else{
    	errPlaceholder.textContent = "";
    }
});

//PASSWORD
pass.addEventListener("keyup",function(){
	var parent = this.parentElement,
		valuePass = this.value.trim(),
		errPlaceholder = parent.querySelector(".msg");
	re =  /^.*(?=.{4,10})(?=.*\d)(?=.*[a-zA-Z]).*$/;

	if(re.test(valuePass)){
		errPlaceholder.textContent = "Must contain ";
	}else{
    	errPlaceholder.textContent = "";
    }

    
});



