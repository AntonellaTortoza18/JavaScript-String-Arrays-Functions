// Exercise 1: Write a JavaScript function that reverses a number. For example, if x =
// 32443 then the output should be 34423.
// Save your JavaScript file and reload the page. Make sure you see the correct output. If
// not, investigate and fix.

function reverse_a_number(numero) {
  numero = numero + "";
  return numero.split("").reverse().join("");
}
document.write(reverse_a_number(123));
document.write(`</br>`);

// Exercise 2: Write a JavaScript function that returns a string in alphabetical order. For
// example, if x = 'webmaster' then the output should be 'abeemrstw'. Punctuation and
// numbers aren't passed in the string.
// Save your JavaScript file and reload the page. Make sure you see the correct output. If
// not, investigate and fix.

function alphabet_order(str) {
  return str.split("").sort().join("");
}

document.write(alphabet_order("webmaster"));
document.write(`</br>`);

// Exercise 3: Write a JavaScript function that converts the first letter of every word to
// uppercase. For example, if x = "prince of persia" then the output should be "Prince Of
// Persia".
// Save your JavaScript file and reload the page. Make sure you see the correct output. If
// not, investigate and fix.

function firstLetterToUppercase(sentence){
let words = sentence.split(" ");
console.log(words)
for (let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    
}
words.join(" ");
document.write(words.join(" "));
}
firstLetterToUppercase("greys anatomy");
document.write(`</br>`);

//

const mySentence = "prince of persia";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

document.write(words.join(" "));
document.write(`</br>`);

// const mySentence = "freeCodeCamp is an awesome resource";
// const words = mySentence.split(" ");

// words.map((word) => { 
//     return word[0].toUpperCase() + word.substring(1); 
// }).join(" ");

// Exercise 4: Write a JavaScript function that finds the longest word in a phrase. For
// example, if x = "Web Development Tutorial", then the output should be
// "Development".
// Save your JavaScript file and reload the page. Make sure you see the correct output. If
// not, investigate and fix.

function findsTheLongestWord(phrase){
    let words = phrase.split(' ');
    let maxLength = 0;
    let longestWord = '';
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
        longestWord = words[i];
      };
    };

  console.log(maxLength);
  console.log(longestWord);
  document.write(longestWord)
};
findsTheLongestWord("Web Development Tutorial");