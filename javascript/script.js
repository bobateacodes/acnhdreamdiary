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
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// smooth scroll to anchor
function smooth() {
  var anchor = document.getElementById("phone");
  anchor.scrollIntoView({behavior: 'smooth', inline: 'center', block: 'start'});
}
