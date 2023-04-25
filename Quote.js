let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes =
[
    "Be the change that you wish to see in the world",
    "The only way to do great work is to love what you do",
    "Life is like a camera. Focus on the good times, develop from the negatives, and if things don't work out, take another shot.",
    "The only true wisdom is in knowing you know nothing.",
   " Believe you can and you're halfway there",
]
btn.addEventListener ('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;

})
