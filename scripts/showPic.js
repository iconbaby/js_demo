function showPic(whichPic){
  var source = whichPic.getAttribute("href");
  document.getElementById("placeHolder").setAttribute("src",source);
}