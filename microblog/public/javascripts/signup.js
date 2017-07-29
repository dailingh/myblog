var username = document.querySelector('#username');
var password = document.querySelector('#password');
var submit = document.querySelector('#submit');
submit.addEventListener("click",function(){
	axios.post('/signup', {
    username: username.value,
    password: password.value
  }).then(function (response) {
    alert(response);
  })
  .catch(function (error) {
    console.log(error);
  });
})
