function thaydoinoidung() {
  // document.getElementById("demo").innerHTML="Hello Cybersoft Academy" //js Thuần
  $("#demo").html("Hello Cybersoft Academy"); //JQUERY
  //js dom thông qua className
  // document.getElementById("demo1")[0].innerHTML="hello 123456789";
  //jquery thông qua selector
  $(".demo1").html("hello 1 đến 9");
}

// định nghĩa sự kiện click cho nút btn
// document.getElementById("btn-change").addEventListener("click",thaydoinoidung); //JS
// định nghĩa sự kiện cho nút btn
$("#btn-change").click(thaydoinoidung); //Jquery





