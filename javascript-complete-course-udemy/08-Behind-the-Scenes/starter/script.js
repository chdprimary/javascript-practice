'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            const str = `Oh, and you're a millenial, ${firstName}`
            console.log(str);
            function add (a, b) {
                return a + b;
            }
        }
        console.log(add(2,3));
    }
    printAge();
    return age;
}

const firstName = "Jonas";
calcAge(1991);

function isStrictMode() {
    return (typeof this == 'undefined');
}
