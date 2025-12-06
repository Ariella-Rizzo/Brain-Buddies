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
      "It's okay to not be okay -Unknown", 
      "You are braver than you believe, stronger than you seem -Christopher Robin/Winnie the Pooh", 
      "You are your best thing. -Tony Morrison",
      "There is hope, even when your brain tells you there isn’t. -John Green",
      "You can’t stop the waves, but you can learn to surf -Jon Kabat-Zinn"
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
