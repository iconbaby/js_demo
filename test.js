// alert('hell');
// var mood, age;
// mood = 'happy', age = 32;
// var check = false;
// var beatles = ["john", "ss", "dd", "ff"]
// var lemon = { name: "john", age: 12, year: 1292 }
// beatles[0] = lemon
// // alert(beatles[0].name)
// var a = false
// var b = ""
// if (a === b) {
//   alert("==")
// }

// for (var i = 0; i < 10; i++) {
//   alert(i);
// }
// function multi(a, b) {
//   alert(a + b);
// }
// multi(3, 4);

// function square(num) {
//   var total = num * num;
//   return total;
// }
// var total = 50;
// var num = square(20)
// alert(total)
// var a = 23234.23424;
// var b = Math.round(a);
// var current_day = new Date();
// var day = current_day.getDay
// alert(current_day)
// alert( typeof document.getElementById("purchases"))
// alert(document.getElementsByTagName("*").length)
window.onload = function () {
  var para = this.document.createElement("p");
  var testdiv = document.getElementById("testdiv");
  testdiv.appendChild(para);
  var text = document.createTextNode("hello world");
  para.appendChild(text);
}