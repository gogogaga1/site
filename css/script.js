window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky+50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    document.getElementById("mlogo").src = "/data/MargSimpleWhite.png";
  }
} 