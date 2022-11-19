// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', (e) => {
    const inputsStr = document.querySelector('textArea').value;
    const inputsArr = inputsStr.split('\n');
    // const inputs = [
    //     "underscore_case",
    //     " first_name",
    //     "Some_Variable ",
    //     "  calculate_AGE",
    //     "delayed_departure",
    // ]
    for (const [i, input] of inputsArr.entries()) {
        let newInput = [];
        const trimmedInput = input.trim();
        const wordArr = trimmedInput.split("_");
        for (const [j, word] of wordArr.entries()) {
            if (j === 0)
                newInput.push(word.toLowerCase());
            else
                newInput.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
        }
        console.log(`${newInput.join("").padEnd(20, " ")}${"✅".repeat(i+1)}`);
    }
});