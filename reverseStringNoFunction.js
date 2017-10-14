
/* this program reverses a string with
nontypical or not suggested functions*/

function iterateString(str){
  var arr = [];
  var myString = "";
  for (var i = 0; i < str.length; i++) {
    arr.unshift(str[i]);  // gets reversed into array
  }
  while (arr.length >= 1){
    myString += arr.shift();
  }

  return myString;

}

console.log(iterateString("hello"));
//[Finished in 1.196s]
//[Finished in 0.121s] why such a variance?
