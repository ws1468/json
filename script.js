let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase = [
  {
    "name" : "Gwang Bok [광복이]",
    "sex" : "male",
    "species" : "Norweigian Forest",
    "birthday" : "August 15, 2018",
    "picture_url" : "boki.png",
  },
  {
    "name" : "Milky [밀키]",
    "sex" : "male",
    "species" : "Samoyed",
    "birthday" : "December 3, 2018",
    "picture_url" : "cutemilky.jpeg",
  },
  {
    "name" : "Tan [탄이]",
    "sex" : "male",
    "species" : "Ginger Domestic Shorthair",
    "birthday" : "Late April, 2020",
    "picture_url" : "smoltan.jpeg",
  }
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
}

function createElement(incomingJSON) {

  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  /// Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['name'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);

  let newContentSex = document.createElement("H5");
  newContentSex.innerText = "Sex : " + incomingJSON['sex'];
  newContentElement.appendChild(newContentSex);

  let newContentSpecies = document.createElement("H5");
  newContentSpecies.innerText = "Species : " + incomingJSON['species'];
  newContentElement.appendChild(newContentSpecies);

  let newContentBirthday = document.createElement("H5");
  newContentBirthday.innerText = "Birthday : " + incomingJSON['birthday'];
  newContentElement.appendChild(newContentBirthday);

  /// Create & add footer image
  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  /// Add the item to the page
  contentGridElement.appendChild(newContentElement);

}
