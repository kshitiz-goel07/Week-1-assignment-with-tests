/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function reverse(str){
  let reverse = "";
  for(let i=str.length-1;i>=0;i--){
    if(str[i] ===  " " || str[i] ===  "," || str[i] ===  "!" || str[i] ===  "?"|| str[i] === "."){

    }
    else{
    reverse = reverse + str[i];
  }
}

return reverse;
}

function isPalindrome(str) {
 
  str =  str.toLowerCase();

  let orignal = "";
  for(let i=0;i<str.length;i++){
    if(str[i] ===  " " || str[i] ===  "," || str[i] ===  "!" || str[i] ===  "?" || str[i] === "."){

    }
    else{
      orignal = orignal + str[i];
    }
  }

  
  
  if(reverse(str) == orignal){
  return true;
}
  else{
    return false;
  }
}

module.exports = isPalindrome;
