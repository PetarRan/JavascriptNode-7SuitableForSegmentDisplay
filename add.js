var start = new Date();
var hrstart = process.hrtime();
setTimeout(function (argument) {
var fs = require("fs");
var englishDictionaryString = fs.readFileSync("words.txt").toString();
allWords = englishDictionaryString.split("\n"); 

var forbiddenLetters = /[gkmpqvwxz-]/;        
var longestAcceptableString = ""; 
var longestAcceptableStringsList = ""; 

for(var testWord of allWords){ 
    if(testWord.length <= longestAcceptableString.length){ 
        continue; 
    }
    if(testWord.match(forbiddenLetters)) { continue; }

    longestAcceptableString = testWord;
}

for(var testWord of allWords){
    if(testWord.length == longestAcceptableString.length){ 
        
        if(testWord.match(forbiddenLetters)) { continue; }
        
        longestAcceptableStringsList += testWord + "\n"; 
    }
}

console.log("Longest acceptable words found contain " 
+ (longestAcceptableString.length-1) + " characters.\n");
console.log(longestAcceptableStringsList);

var end = new Date() - start,
        hrend = process.hrtime(hrstart);

console.info("Execution time: %dms", end);
console.info("Execution time (hr): %ds %dms", hrend[0], hrend[1]/1000000);
},1);
