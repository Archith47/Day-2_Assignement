let copy;
copy=() => "the text is copied";
let cut =() => "the text was cut";
function write() {
    var x = document.getElementById("myInput").value;
    document.getElementById("demo").innerHTML = "You wrote: " + x;
  }