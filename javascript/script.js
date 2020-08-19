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
  var button = document.getElementById("p-desc-b");
  var x = document.getElementById("desc-info");
  if (button.innerHTML == "more info") {
    button.innerHTML = "less info";
    button.style.background = "#8360A2";
    x.style.display = "block";
  }
  else {
    button.innerHTML = "more info";
    button.style.background = "#B698CE";
    x.style.display = "none";
  }
}

// add to my favs
function addToFavs() {
  var favtext = document.getElementById("addFavs");
  var faved = '<object id="hearticon" type="image/svg+xml" data="img/heart-fav.svg"></object>';
  var notfav = '<object id="hearticon" type="image/svg+xml" data="img/heart-unfav.svg"></object>';
  if ((favtext.innerHTML == "add to my favs " + notfav) || (favtext.innerHTML == "removed " + notfav)) {
    favtext.innerHTML = "added! " + faved;
  }
  else {
    favtext.innerHTML = "removed " + notfav;
  }
}
