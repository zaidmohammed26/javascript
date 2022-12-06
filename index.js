
const Quote = require('inspirational-quotes');

console.log(Quote.getQuote()); // returns quote (text and author)
console.log(Quote.getQuote({ author: false })); // return quote without author
const a = Quote.getRandomQuote(); // return any random quote



var cowsay = require("cowsay");

console.log(cowsay.say({
    text : a,
    e : "oO",
    T : "U "
}));
