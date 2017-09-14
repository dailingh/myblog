var logout = document.querySelector(".logout");
var text = document.querySelector(".text");
var submit = document.querySelector(".submit");
var content = document.querySelector(".content");
var author = document.querySelector(".user")
console.log(text.value);
// logout.addEventListener("click",function () {
//   axios.post("/logout",{
//     logout: "yeah"
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// })



logout.addEventListener("click",function () {
  window.location.href = "/logout"
})

submit.addEventListener("click",function () {
  axios.post("/user",{
    name: author.innerText,
    time: new Date(),
    blog: text.value,
  })
  .then(function(res) {
    if(res.data === "new blog is created"){
      var tpl = document.createElement("div");
      var content = document.querySelector(".content");

      console.log(content);
      tpl.className = "div";
      tpl.innerText = text.value;
      content.appendChild(tpl);
    }
  })
  .catch(function (error) {
    console.log(error);
  });
})
