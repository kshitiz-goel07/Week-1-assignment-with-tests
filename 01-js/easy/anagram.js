/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function stringSort(str){
  var a = str.toLowerCase();
   a = a.split("");
   a = a.sort();
   a = a.join(""); 
   return a;
}

function isAnagram(str1, str2) {

  if(str1.length != str2.length){
    return false;
  }
else if(stringSort(str1) == stringSort(str2)){
  return true;
}
else{
  return false;
}
}

module.exports = isAnagram;
