
// more info, less info button
function toggle() {
  var button = document.getElementById("p-desc-b");
  if (button.innerHTML == "more info") {
    button.innerHTML = "less info";
  }
  else {
    button.innerHTML = "more info";
  }
}

function addInfo() {
  var x = document.getElementById("desc-info");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
