// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
// using Array.entries to get index,val array and array destructuring in for..of
for (const [index, scorer] of game.scored.entries())
    console.log(`Goal ${index+1}: ${scorer}`);

// 2.
// Brute solution using loop
let sum = 0;
let odds = Object.values(game.odds);
for (const odd of odds)
    sum += odd;
let avg = sum / odds.length;
console.log(avg);

// 2.
// Alternative solution
const oddsArr = Object.values(game.odds);
const oddsSum = oddsArr.reduce((a,b) => a+b);
const oddsAvg = oddsSum / oddsArr.length;
console.log(`The average odd is: ${oddsAvg.toFixed(2)}`);

// 3.
// errors - game.odds not iterable
// for (const {team1, x: draw, team2} of game.odds) {
//     console.log(team1, draw, team2);
// }
// doesn't handle draw case correctly
// for (const key in game.odds) {
//     console.log(`Odd of victory ${game[key]}: ${game.odds[key]}`);
// }

// non-looping solution
const {team1, x: draw, team2} = game.odds;
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

// this looping works but a bit clunky
for (const [teamName, odd] of Object.entries(game.odds))
    console.log(`Odd of ${game[teamName] ? "victory " + game[teamName] : "draw"}: ${odd}`);

// less clunky but doesn't match text exactly
for (const [teamName, odd] of Object.entries(game.odds))
    console.log(`Odd of ${game[teamName] ?? "draw"}: ${odd}`);

// best solution, builds substring separately
console.log(`%cSolution:`, `color:green`);
for (const [team, odd] of Object.entries(game.odds)) {
    const substr = game[team] ? `victory ${game[team]}` : `draw`
    console.log(`Odd of ${substr}: ${odd}`);
}

// BONUS
const scorers = {}
for (const scoreName of game.scored) {
    // console.log(scoreName);
    // console.log(scorers.scoreName); // this doesn't work because you can't use vars with dot
    // console.log(scorers[scoreName]);
    const numScores = scorers[scoreName] ?? 0;
    scorers[scoreName] = numScores + 1;
}
console.log(scorers);