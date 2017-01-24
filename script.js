var loginForm = document.forms.loginForm,
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

