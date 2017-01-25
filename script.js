var loginForm = document.forms.loginForm,
		mail = loginForm.elements.mail,
		pass = loginForm.elements.pass,
		msg = document.getElementsByClassName("msg"),
		regForm = document.forms.regForm,
		regLink = document.querySelector(".reg_link"),
		logLink = document.querySelector(".log_link_2"),
        success = document.querySelector(".success");

	regForm = document.forms.regForm,
		fname = regForm.elements.fname,
		mail2 = regForm.elements.mail2,
		pass2 = regForm.elements.pass2,
		passConfirm = regForm.elements.c_pass;

regLink.addEventListener("click",function(){
	regForm.style.display = "block";
	loginForm.style.display="none";
	document.title = "Registration";
});
logLink.addEventListener("click",function(){
	regForm.style.display = "none";
	loginForm.style.display="inline-block";
    document.title = "Login";
    success.className = "success";
});
//LOGIN FORM VALIDATION
loginForm.addEventListener("submit",function(e){

    if(mail.value.length===0){
        msg[0].innerText = "Cant be empty!";
        e.preventDefault(); 
    }
    if(pass.value.length===0){
        msg[1].innerText = "Cant be empty!";
        e.preventDefault();  
    }

	if(mail.value.length != 0 && pass.value.length != 0){
        success.className += ' show';
        mail.value ="";
        pass.value = ""; 
        //document.forms.loginForm.submit();
    }else {
        e.preventDefault();
    }
    
});

//Mail
mail.addEventListener("keyup",function(){
	var parent = this.parentElement,
		valueMail = this.value.trim(),
		errPlaceholder = parent.querySelector(".msg");

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!re.test(valueMail) ){
    	errPlaceholder.textContent = "Incorrects email input";
        //return false;
        //mail.style.boxShadow="0px 0px 21px 0px red";
    }else{
        //mail.style.boxShadow="none";
    	errPlaceholder.textContent = "";

    }
});
//PASSWORD
pass.addEventListener("keyup",function(){
	var parent = this.parentElement,
		valuePass = this.value.trim(),
		errPlaceholder = parent.querySelector(".msg");
	re =  /^[A-Za-z][A-Za-z0-9]*$/;

	if(!re.test(valuePass)){
		errPlaceholder.textContent = " only english letters allowed";
	}else if(valuePass.length <= 3){
        errPlaceholder.textContent = "password to short";
    }else{
    	errPlaceholder.textContent = "";
    }
});
///Form registration

regForm.addEventListener("submit",function(e){
	if(fname.value.length===0){
        msg[2].innerText = "Cant be empty!";
        e.preventDefault(); 
    }
    if(mail2.value.length===0){
        msg[3].innerText = "Cant be empty!";
        e.preventDefault();  
    }
    if(pass2.value.length===0){
        msg[4].innerText = "Cant be empty!";
        e.preventDefault();  
    }
    if(c_pass.value.length===0){
        msg[5].innerText = "Cant be empty!";
        e.preventDefault();  
    }

    if(fname.value.length != 0 && mail2.value.length != 0 && pass2.value.length != 0 && c_pass.value.length != 0){
        success.className += ' show';
        fname.value ="";
        mail2.value ="";
        pass2.value ="";
        c_pass.value = ""; 
        //document.forms.loginForm.submit();
    }else {
        e.preventDefault();
    }
});

fname.addEventListener("keyup", function () {
		var parent = this.parentElement,
			valueName = this.value.trim(),
			errPlaceholder = parent.querySelector(".msg");
		if(valueName.length <= 3){
			errPlaceholder.textContent = "Name must be longer then 3 chars";
		}else{
			errPlaceholder.textContent = "";

		}
});
mail2.addEventListener("keyup",function(){
    var parent = this.parentElement,
        valueMail = this.value.trim(),
        errPlaceholder = parent.querySelector(".msg");

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!re.test(valueMail) ){
        errPlaceholder.textContent = "Incorrects email input";
        //return false;
        //mail.style.boxShadow="0px 0px 21px 0px red";
    }else{
        //mail.style.boxShadow="none";
        errPlaceholder.textContent = "";

    }
});
pass2.addEventListener("keyup",function(){
    var parent = this.parentElement,
        valuePass = this.value.trim(),
        errPlaceholder = parent.querySelector(".msg");
    re =  /^[A-Za-z][A-Za-z0-9]*$/;

    if(!re.test(valuePass)){
        errPlaceholder.textContent = " only english letters allowed";
    }else if(valuePass.length <= 3){
        errPlaceholder.textContent = "password to short";
    }else{
        errPlaceholder.textContent = "";
    }
});
passConfirm.addEventListener("keyup",function(){
    var parent = this.parentElement,
        valuePass = this.value.trim(),
        errPlaceholder = parent.querySelector(".msg");

    if(valuePass != pass2.value){
        errPlaceholder.textContent = "pasword dont match";
	}else{
        errPlaceholder.textContent = "";
	}
});







