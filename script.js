const quotes = [
    "Be yourself; everyone else is already taken.   -Oscar Wilde",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.   -Albert Einstein",
    "You only live once, but if you do it right, once is enough.   -Mae West",
    "Things work out best for those who make the best of how things work out.   -John Wooden ",
    "If you are not willing to risk the usual you will have to settle for the ordinary.   -Jim Rohn",
    "Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.   -Swami Vivekananda",
    "All our dreams can come true if we have the courage to pursue them.   -Walt Disney",
    "Success is walking from failure to failure with no loss of enthusiasm.   -Winston Churchill",
    "Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them.   -Vaibhav Shah",
    "Opportunities don't happen, you create them.   -Chris Grosser",
    "Try not to become a person of success, but rather try to become a person of value.   -Albert Einstein",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people.   -Eleanor Roosevelt",
    "I have not failed. I've just found 10,000 ways that won't work.   -Thomas A. Edison",
    "If you don't value your time, neither will others. Stop giving away your time and talents--start charging for it.   -Kim Garst",
    "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.   -David Brinkley",
    "No one can make you feel inferior without your consent.   -Eleanor Roosevelt",
    "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.   -Henry Ford",
    "If you're going through hell keep going.   -Winston Churchill",
    "When you stop chasing the wrong things, you give the right things a chance to catch you.   -Lolly Daskal",
    "Don't be afraid to give up the good to go for the great.   -John D. Rockefeller",
    // Add more quotes here
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
}

document.getElementById("new-quote").addEventListener("click", generateQuote);

// Generate a quote on page load
generateQuote();
