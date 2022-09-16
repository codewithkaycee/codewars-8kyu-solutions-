// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
  //create a local variable
let num = '';
  // for-loop 
  for(let i = 0; i < x.length; i++){
    //create a conditions if this true replace with any digit below 5
    if (x[i] < '5')num  +='0';
    // if this true replace with any digit above 5
    else if (x[i] >= '5')num += '1';
  }
  return num;
}

// Another solution

function fakeBin(x){
  return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1')
}
