window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
var menu = document.getElementById("myMenu")

function myFunction() {
  if (window.pageYOffset > sticky+50) {
    header.classList.add("sticky");
    header.classList.remove("header");
  } else {
    header.classList.remove("sticky");
    header.classList.add(header)
    header.classList.add("menu");
    document.getElementById("mlogo").src = "/data/MargSimpleWhite.png";
  }
} 