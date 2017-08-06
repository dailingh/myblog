var username = document.querySelector('#username');
var password = document.querySelector('#password');
var submit = document.querySelector('#submit');
submit.addEventListener("click",function(){
	console.log(username.value);
	console.log(password.value);
	axios.post('/signup', {
    username: username.value,
    password: password.value
  }).then(function (res) {
    alert(res.data);
		if(res.data === "new user is signed up"){
			window.open('/')
		}
  })
  .catch(function (error) {
    console.log(error);
  });
})
