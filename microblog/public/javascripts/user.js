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
    time: new Date().toLocaleString(),
    blog: text.value,
  })
  .then(function(res) {
    console.log(res.data);
    if(res.data.state === 200){
      var tpl = document.createElement("div");
      var content = document.querySelector(".content");
      tpl.className = "blog";
      // console.log(content);
      tpl.innerHTML = "<div>"+res.data.name+"</div><div>"+res.data.time+"</div><div>"+res.data.blog+"</div>";
      content.insertBefore(tpl,content.firstChild);
      text.value = "";
    }
  })
  .catch(function (error) {
    console.log(error);
  });
})
