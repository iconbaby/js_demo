function showPic(whichPic){
  var source = whichPic.getAttribute("href");
  document.getElementById("placeHolder").setAttribute("src",source);
  var title = whichPic.getAttribute("title");
  var description = document.getElementById("description");
  description.firstChild.nodeValue = title;
}

function countBodyChildren(){
  var body_element = document.getElementsByTagName("body")[0];
  for(var i =1;i<body_element.length;i++){}
  alert(body_element.childNodes.length)
}
window.onload = countBodyChildren;