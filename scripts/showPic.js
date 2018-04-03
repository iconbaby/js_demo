function showPic(whichPic) {
  if (!document.getElementById("placeHolder")) return false;
  var source = whichPic.getAttribute("href");
  if (document.getElementById("placeHolder").nodeName != "IMG") return false;
  document.getElementById("placeHolder").setAttribute("src", source);
  if (document.getElementById("description")) {
    var title = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {
      description.firstChild.nodeValue = title;
    }
  }
  return true;
}

function countBodyChildren() {
  var body_element = document.getElementsByTagName("body")[0];
  for (var i = 1; i < body_element.length; i++) { }
  alert(body_element.childNodes.length);
}

function prepareGallay() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;
  var gallery = document.getElementById("imagegallery");
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      return showPic(this) ? false : true;
    }
  }
}

function addLoadEvent(func) {
  var oldLoad = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function () {
      oldLoad();
      func();
    }
  }
}
// window.onload = prepareGallay;
addLoadEvent(prepareGallay);