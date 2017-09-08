var logout = document.querySelector(".logout");
var text = document.querySelector(".text");
var submit = document.querySelector(".submit");
var content = document.querySelector(".content");
console.log(logout);
// logout.addEventListener("click",function () {
//   axios.post("/logout",{
//     logout: "yeah"
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// })
logout.addEventListener("click",function () {
  window.location.href = "/"
})

submit.addEventListener("click",function () {
  var tpl = document.createElement("div");
  tpl.className = "div";
  tpl.innerText = text;
  content.appendChild("tpl");
})
