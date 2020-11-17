let earlyGrid = document.getElementById('earlyGrid');
let preGrid = document.getElementById('preGrid');
let youngGrid = document.getElementById('youngGrid');
let oldGrid = document.getElementById('oldGrid');

//JSON DATABASE
let memoryColors = [
  {
    "years" : "early",
    "title" : "0 years",
    "picture" : "images/early_1.jpg",
    "note" : "born and simply existing"
  },

  {
    "years" : "early",
    "title" : "1 year",
    "picture" : "images/early_2.jpg",
    "note" : "experimenting with my senses"
  },

  {
    "years" : "early",
    "title" : "2 years",
    "picture" : "images/early_3.jpg",
    "note" : "my first words"
  },

  {
    "years" : "early",
    "title" : "3 years (nursery)",
    "picture" : "images/early_4.jpg",
    "note" : "my first thoughts"
  },

  {
    "years" : "early",
    "title" : "4 years",
    "picture" : "images/early_5.jpg",
    "note" : "I liked playing with dinosaurs and barbie dolls"
  },

  {
    "years" : "early",
    "title" : "5 years",
    "picture" : "images/early_6.jpg",
    "note" : "I read a lot of books about sharks and cars"
  },

  {
    "years" : "pre",
    "title" : "6 years (grade 1)",
    "picture" : "images/pre_1.jpg",
    "note" : "I missed my mom whenever she would drop me off at school.. I would cry a lot in class"
  },

  {
    "years" : "pre",
    "title" : "7 years",
    "picture" : "images/pre_2.jpg",
    "note" : "I didn't know what a crush was so my friends asked me to just choose someone.. he ended up being my crush for 3 years"
  },

  {
    "years" : "pre",
    "title" : "8 years",
    "picture" : "images/pre_3.jpg",
    "note" : "Elected class president. I felt like a true leader"
  },

  {
    "years" : "pre",
    "title" : "9 years (grade 4)",
    "picture" : "images/pre_4.jpg",
    "note" : "I met a friend who taught me everything I needed to know about life growing up"
  },

  {
    "years" : "pre",
    "title" : "10 years",
    "picture" : "images/pre_5.jpg",
    "note" : "one of the best years of my life because of my friends, family, and my first love"
  },

  {
    "years" : "pre",
    "title" : "11 years",
    "picture" : "images/pre_6.jpg",
    "note" : "I wore these pair of leggings everyday until they got holes in it"
  },

  {
    "years" : "young",
    "title" : "12 years",
    "picture" : "images/young_1.jpg",
    "note" : "the second, and last, good year in my life. school was so fun and I was the top of my class"
  },

  {
    "years" : "young",
    "title" : "13 years",
    "picture" : "images/young_2.jpg",
    "note" : "we combined with another class and it was not so great. I transferred schools that year"
  },

  {
    "years" : "young",
    "title" : "14 years (grade 9)",
    "picture" : "images/young_3.jpg",
    "note" : "traumatic. a year I want to erased from my memory"
  },

  {
    "years" : "young",
    "title" : "15 years",
    "picture" : "images/young_4.jpg",
    "note" : "a new beginning at a new school (again). the first semester gave me so much hope"
  },

  {
    "years" : "young",
    "title" : "16 years",
    "picture" : "images/young_5.jpg",
    "note" : "so . much . drama . and I was just dragged into it. it wasn't all bad though... I reconnected with my first love"
  },

  {
    "years" : "young",
    "title" : "17 years",
    "picture" : "images/young_6.jpg",
    "note" : "I tried to keep a low-profile but people still managed to create drama surrounding me"
  },

  {
    "years" : "old",
    "title" : "18 years (freshman)",
    "picture" : "images/old_1.jpg",
    "note" : "I thought I had it all figured out"
  },

  {
    "years" : "old",
    "title" : "19 years",
    "picture" : "images/old_2.jpg",
    "note" : "I applied for NYU and I got in"
  },

  {
    "years" : "old",
    "title" : "20 years",
    "picture" : "images/old_3.jpg",
    "note" : "feeling lost but it's going to be alright"
  },

  {
    "years" : "old",
    "title" : "21 years",
    "picture" : "images/old_4.jpg",
    "note" : "TBD"
  },

  {
    "years" : "old",
    "title" : "22 years (graduated)",
    "picture" : "images/old_4.jpg",
    "note" : "TBD"
  },

  {
    "years" : "old",
    "title" : "23 years)",
    "picture" : "images/old_4.jpg",
    "note" : "TBD"
  }

];

for (let i = 0; i < memoryColors.length; i++) {
  createElement(memoryColors[i]);
}

function createElement(incomingJSON){
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  //age
  let newContentYear = document.createElement("H4");
  newContentYear.classList.add('contentYear');
  newContentYear.innerText = incomingJSON['title'];
  newContentElement.appendChild(newContentYear);

  //pantone images
  let newContentColor = document.createElement("IMG");
  newContentColor.classList.add("pantoneColor");
  newContentColor.src = incomingJSON['picture'];
  newContentElement.appendChild(newContentColor);

  //description
  let newContentNotes = document.createElement("P");
  newContentNotes.classList.add('contentNotes');
  newContentNotes.innerText = incomingJSON['note'];
  newContentElement.appendChild(newContentNotes);

  if (incomingJSON['years'] === 'early'){
    earlyGrid.appendChild(newContentElement);
  } else if (incomingJSON['years'] === 'pre'){
    preGrid.appendChild(newContentElement);
  } else if (incomingJSON['years'] === 'young'){
    youngGrid.appendChild(newContentElement);
  } else if (incomingJSON['years'] === 'old'){
    oldGrid.appendChild(newContentElement);
  }
}

//Change image on hover??????
var memoryArray = ["memories/IMG_0774.JPG", "memories/IMG_4605.JPG", "memories/IMG_9385.JPG"];

function getRandomMemory() {
  var index = Math.floor(Math.random() * memoryArray.length);
  return memoryArray[index];
}

//scroll for hero image
function scrollWin() {
  window.scrollTo(0, 700);
}
