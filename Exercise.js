let copy;
copy = () => console.log("copied");
let cut = () => console.log("cut");
let dClick=()=> console.log("double click");
var x = document.getElementById("myInput").value;
function myFunction() {
    var x = document.getElementById("myInput").value;
    document.getElementById("demo").innerHTML = "You wrote: " + x;
  }
let paste = () => console.log("paste");
let error = ()=> alert('The image could not be loaded.');