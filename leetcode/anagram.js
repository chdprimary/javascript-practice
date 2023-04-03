// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a
// different word or phrase, typically using all the original letters exactly
// once.

const isAnagram = (s, t) => s.split('').sort().join('') === t.split('').sort().join('')

// const isAnagram = (s, t) => {
//     obj1 = {};
//     obj2 = {};
//     for (let i of s) {
//         if (!(i in obj1)) {
//             obj1[i] = 0;
//         }
//         obj1[i] += 1;
//     }
//     for (let i of t) {
//         if (!(i in obj2)) {
//             obj2[i] = 0;
//         }
//         obj2[i] += 1;
//     }
//     if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
//     for (let char of Object.keys(obj1)) {
//         if (obj1[char] !== obj2[char]) {
//             return false;
//         }
//     }
//     return true;
// }
