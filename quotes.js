// ---------------------------
// 1. Generate random integer
// ---------------------------
function randomInt(lowest, size) {
   return Math.floor(Math.random() * size) + lowest;
}

// Create a random integer from 0 to 9 (10 quotes total)
var randomQ = randomInt(0, 10);


// ---------------------------
// 2. Provided getQuote(n) function
// ---------------------------
function getQuote(n) {
   var quotes = [
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
      "Silly things do cease to be silly if they are done by sensible people in an impudent way.",
      "Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody.",
      "Life seems but a quick succession of busy nothings.",
      "Our scars make us know that our past was for real.",
      "I cannot speak well enough to be unintelligible.",
      "One cannot be always laughing at a man without now and then stumbling on something witty.",
      "Men were put into the world to teach women the law of compromise.",
      "The person, be it gentlemen or lady, who has not pleasure in a good novel, must be intolerably stupid."
   ];
   
   return quotes[n];
}


// ---------------------------
// 3. Write quote into <quote> element
// ---------------------------

// Find the FIRST <quote> element in the HTML
var quoteElem = document.getElementsByTagName("quote")[0];

// Insert the chosen quote (wrapped in <q> for styling)
quoteElem.innerHTML = "<q>" + getQuote(randomQ) + "</q>";
