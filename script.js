const quotes = [
  "The quick brown fox jumps over the lazy dog",
  "JavaScript is a fun programming language",
  "Typing tests help increase productivity",
  "You can achieve anything with consistency",
  "Practice typing to improve your speed",
  "Every expert was once a beginner",
  "Code is like humor. When you have to explain it, it’s bad",
  "The best way to predict the future is to invent it",
  "Stay hungry, stay foolish",
  "Success is not final, failure is not fatal",
  "Do not be afraid to give up the good for the great",
  "Discipline is the bridge between goals and accomplishment",
  "Dream big and dare to fail",
  "Push yourself, because no one else is going to do it for you",
  "Great things never come from comfort zones",
  "Wake up with determination, go to bed with satisfaction",
  "Do something today that your future self will thank you for",
  "Little things make big days",
  "It’s going to be hard, but hard does not mean impossible",
  "Don’t watch the clock; do what it does. Keep going",
  "You don’t have to be great to start, but you have to start to be great",
  "The secret of getting ahead is getting started",
  "Programming isn’t about what you know; it’s about what you can figure out",
  "Experience is the name everyone gives to their mistakes",
  "In order to be irreplaceable, one must always be different",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging",
  "First, solve the problem. Then, write the code",
  "Simplicity is the soul of efficiency",
  "Code never lies, comments sometimes do",
  "Talk is cheap. Show me the code",
  "Programs must be written for people to read",
  "Give me six hours to chop down a tree and I will spend the first four sharpening the axe",
  "Programming is the art of algorithm design and the craft of debugging errant code",
  "Without requirements or design, programming is the art of adding bugs to an empty text file",
  "If at first you don’t succeed, call it version 1.0",
  "Good code is its own best documentation",
  "Coding is like writing a book... except if you miss a single comma on page 126, the whole thing makes no sense",
  "You miss 100% of the shots you don’t take",
  "The only limit to our realization of tomorrow is our doubts of today",
  "Don’t limit your challenges. Challenge your limits",
  "Be so good they can’t ignore you",
  "The purpose of our lives is to be happy",
  "Life is what happens when you’re busy making other plans",
  "Get busy living or get busy dying",
  "You only live once, but if you do it right, once is enough",
  "Never let the fear of striking out keep you from playing the game",
  "Money and success don’t change people; they merely amplify what is already there",
  "Not how long, but how well you have lived is the main thing",
  "If life were predictable it would cease to be life",
  "Life is short, and it is here to be lived",
  "Live in the sunshine, swim the sea, drink the wild air",
  "The greatest glory in living lies not in never falling, but in rising every time we fall",
  "Keep smiling, because life is a beautiful thing and there’s so much to smile about",
  "In the end, it’s not the years in your life that count. It’s the life in your years",
  "Time is money",
  "All our dreams can come true, if we have the courage to pursue them",
  "If you can dream it, you can do it",
  "Hard work beats talent when talent doesn’t work hard",
  "Opportunities don't happen. You create them",
  "Work until your idols become your rivals",
  "Don’t be pushed around by the fears in your mind",
  "Instead of wishing for it, work for it",
  "There is no substitute for hard work",
  "Success usually comes to those who are too busy to be looking for it",
  "The only place where success comes before work is in the dictionary",
  "Do what you can with all you have, wherever you are",
  "Start where you are. Use what you have. Do what you can",
  "Quality is not an act, it is a habit",
  "The difference between ordinary and extraordinary is that little extra",
  "Perfection is not attainable, but if we chase perfection we can catch excellence",
  "If you want to achieve greatness, stop asking for permission",
  "Try not to become a man of success. Rather become a man of value",
  "Learn as if you will live forever, live like you will die tomorrow",
  "Stay away from those people who try to disparage your ambitions",
  "Success is walking from failure to failure with no loss of enthusiasm",
  "All progress takes place outside the comfort zone",
  "It always seems impossible until it is done",
  "Success is not how high you have climbed, but how you make a positive difference",
  "Go the extra mile, it's never crowded",
  "You don’t need to see the whole staircase, just take the first step",
  "Do the hard work, especially when you don’t feel like it",
  "Your only limit is your mind",
  "Success is the sum of small efforts repeated day in and day out",
  "Push through the pain and you’ll find strength",
  "When you feel like quitting, remember why you started",
  "A river cuts through rock not because of its power, but its persistence",
  "Small steps every day",
  "Fall seven times, stand up eight",
  "Today is your opportunity to build the tomorrow you want",
  "Success begins with self-discipline",
  "You were born to win",
  "Motivation gets you started, habit keeps you going",
  "Winners are not afraid of losing, but losers are",
  "Failure is not the opposite of success, it’s part of success",
  "Don't wish it were easier, wish you were better",
  "Be brave. Take risks. Nothing can substitute experience",
  "Your future is created by what you do today, not tomorrow",
  "The best view comes after the hardest climb",
  "Typing fast starts with accuracy"
];


let quote = "";
let startTime;

// Start a new test
function startTest() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quote = quotes[randomIndex];
  document.getElementById("quoteDisplay").textContent = quote;
  document.getElementById("quoteInput").value = "";
  document.getElementById("result").textContent = "";
  startTime = null;
}

// Calculate WPM and accuracy
document.getElementById("quoteInput").addEventListener("input", () => {
  const input = document.getElementById("quoteInput").value;

  if (!startTime) startTime = new Date();

  if (input === quote) {
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000;
    const wordCount = quote.split(" ").length;
    const wpm = Math.round((wordCount / timeTaken) * 60);

    // Accuracy calculation
    let correctChars = 0;
    for (let i = 0; i < quote.length; i++) {
      if (input[i] === quote[i]) {
        correctChars++;
      }
    }
    const accuracy = ((correctChars / quote.length) * 100).toFixed(2);

    document.getElementById("result").textContent =
      `✅ Time: ${timeTaken.toFixed(2)}s | WPM: ${wpm} | Accuracy: ${accuracy}%`;
  }
});

// Start test on load
startTest();