const quotes = [
  {
    quote: "Mistakes are the proof that you are trying.",
    author: "Bunty Virani"
  },
  {
    quote: "Exprience is simply the name given we give our mistakes.",
    author: "Mark Twain"
  },
  {
    quote: "The key to success is failure.",
    author: "Michael Jordan"
  },
  {
    quote: "Imagination is more important than knowledge.",
    author: "Albert Einstein"
  },
  {
    quote: "No one is perfect. That's why pencil have eraser.",
    author: "Yasin Virani"
  },
  {
    quote: "To succeed in life, you need two things:Ignorance and confidience.",
    author: "Mark Twain"
  }

];

function newquote() {
  var randomnumber = Math.floor(Math.random() * quotes.length);
  console.log('the value  of quotes is :',quotes[randomnumber].quote);
  document.getElementById("text").innerHTML = quotes[randomnumber].quote;
  document.getElementById("author").innerHTML = quotes[randomnumber].author;
  document.getElementById("tweet-quote").href = "https://twitter.com/intent/tweet?text=Hello%20world" + quotes[randomnumber];
}


// function tweetQuote()
// {
// window.open('https://twitter.com/intent/tweet?text= Hello' + quotes[randomnumber]);
// }


 



//  var shareQuote = function(){
  //  window.open('https://twitter.com/intent/tweet' + quotes)
//  











// console.log('the value  of quotes is :',quotes[randomnumber].quote);
