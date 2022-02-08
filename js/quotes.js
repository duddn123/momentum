
const quotes = [
    {
        quote : "“Be yourself; everyone else is already taken.",
        author : "Oscar Wilde"
    },
    {
        quote : "So many books, so little time.",
        author : "Frank Zappa"
    },
    {
        quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author : "Steve Jobs"
    },
    {
        quote : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author : "-James Cameron"
    },
    {
        quote : "It is during our darkest moments that we must focus to see the light.",
        author : "Aristotle"
    },
    {
        quote : "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author : "Thomas A. Edison"
    },
    {
        quote : "Success usually comes to those who are too busy to be looking for it.",
        author : "Henry David Thoreau"
    },
    {
        quote : "The way to get started is to quit talking and begin doing.",
        author : "Walt Disney"
    },
    {
        quote : "Whether you think you can or you think you can't, you're right.",
        author : "Henry Ford"
    },
    {
        quote : "I would rather die of passion than of boredom",
        author : "Vincent van Gogh"
    },
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuotes.quote;
author.innerText = randomQuotes.author;
