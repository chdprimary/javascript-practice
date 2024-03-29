
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = function(ages) {
    // 1.
    const humanAges = ages.map(age => (age <= 2) ? age * 2 : age * 4 + 16);
    console.log(`Dogs' human ages: ${humanAges}`);

    // 2.
    const adults = humanAges.filter(age => age >= 18);
    console.log(`Dogs' ages that are at least 18 human years old: ${adults}`);

    // 3.
    let avg = adults.reduce((sum, age) => sum + age, 0);
    avg /= adults.length;
    // could also do one-line average by using math! 
    // let avg = adults.reduce((sum, age, i, arr) => sum + age / arr.length, 0);
    console.log(`Dogs' average human age: ${avg}`);
    return avg;
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(`===`);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);