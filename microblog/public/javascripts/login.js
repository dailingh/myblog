var username = document.querySelector('#username');
var password = document.querySelector('#password');
var submit = document.querySelector('#submit');
submit.addEventListener("click",function(){
	console.log(username.value);
	console.log(password.value);
	axios.post("/login", {
    username: username.value,
    password: password.value
  }).then(function (res) {
		if(res.data === "the user is undefined"){
			alert(res.data);
		}else {
			window.location.href = "/user";
		}
  })
  .catch(function (error) {
    console.log(error);
  });
})
