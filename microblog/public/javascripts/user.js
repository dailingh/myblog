var logout = document.querySelector("button");
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
