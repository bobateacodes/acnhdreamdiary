// random dream addresses
function randomAddress() {
  var min = 1000
  var max = 9999
  var output = document.getElementById("da-value");
  var string = "DA-";
  var address = Math.floor(Math.random() * (max-min+1)) + min; //testing
  output.innerHTML = string + address + "-0000-0000"  //testing
  return output;
}

// toggle more info, less info button
function showInfo() {
  var desc = document.querySelector(".p-desc");
  var button = document.getElementById("p-desc-b");
  var x = document.getElementById("desc-info");
  if (button.innerHTML == "more info") {
    desc.style.borderBottomLeftRadius = "0px";
    desc.style.borderBottomRightRadius = "0px";
    button.innerHTML = "less info";
    button.style.background = "#8360A2";
    x.style.display = "block";
  }
  else {
    button.innerHTML = "more info";
    button.style.background = "#B698CE";
    x.style.display = "none";
    desc.style.borderBottomLeftRadius = "25px";
    desc.style.borderBottomRightRadius = "25px";
  }
}

// add to my favs
function addToFavs() {
  var favtext = document.getElementById("addFavs");
  var heart = document.getElementById("hearticon")
  if ((favtext.innerHTML == "add to my favs") || (favtext.innerHTML == "removed")) {
    favtext.innerHTML = "added!";
    heart.style.backgroundImage = "url('https://raw.githubusercontent.com/bobateacodes/acnhdreamdiary/master/img/heart-fav.svg')";
  }
  else {
    favtext.innerHTML = "removed";
    heart.style.backgroundImage = "url('https://raw.githubusercontent.com/bobateacodes/acnhdreamdiary/master/img/heart-unfav.svg')";
  }
}
