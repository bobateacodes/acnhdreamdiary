// global variables
let generator = {
  address: "Generate a Random Dream",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.",
  images: [],
  tags: [],
  faved: false,

  //getters and setters
  getAddress: function() {
    return this.address;
  },
  getDesc: function() {
    return this.desc;
  },
  getImages: function() {
    return this.images;
  },
  getFaved: function() {
    return this.faved;
  },

  setAddress: function(address) {
    this.address = address;
  },
  setDesc: function(desc) {
    this.desc = desc;
  },
  setImages: function(img) {
    this.images = img;
  },
  setFaved: function(fav) {
    this.faved = fav;
  }
};

// random dream addresses
function generate() {
  var min = 1000
  var max = 9999
  var string = "DA-";
  var address = Math.floor(Math.random() * (max-min+1)) + min; //testing
  var output = string + address + "-0000-0000";  //testing
  generator.setAddress(output);
  generator.setDesc('hi there random ' + address);
}

// toggle more info, less info button
function showInfo() {
  var desc = document.getElementById("p-desc");
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
  var heart = document.getElementById("hearticon");
  if ((favtext.innerHTML == "add to my favs") || (favtext.innerHTML == "removed")) {
    favtext.innerHTML = "added!";
    generator.setFaved(true);
    heart.style.backgroundImage = "url('https://raw.githubusercontent.com/bobateacodes/acnhdreamdiary/master/img/heart-fav.svg')";
  }
  else {
    favtext.innerHTML = "removed";
    generator.setFaved(false);
    heart.style.backgroundImage = "url('https://raw.githubusercontent.com/bobateacodes/acnhdreamdiary/master/img/heart-unfav.svg')";
  }

  if (generator.getFaved()) {
    //do something
  }
}

function updateValues() {
  var address = document.getElementById('da-value');
  var desc = document.getElementById('p-desc');
  var button = '<div id="p-desc-b" class="noselect" onclick="showInfo()">more info</div>';
  var tags;
  address.innerHTML = generator.getAddress();
  desc.innerHTML = '<p>' + generator.getDesc() + '</p>' + button;
  return;
}
