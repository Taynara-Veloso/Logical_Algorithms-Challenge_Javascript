/* 
  Implement a function reverse that reverses an 
  array of characters IN PLACE, that is writes 
  the result in the same memory as the given 
  input without allocating extra memory.

  Do not use any existing reverse() functions and 
  do not copy the vector or allocate extra memory.

  Input:

  ['x', 'y', 'z', 'w']

  Output:

  ['w', 'z', 'y', 'x'] 
*/

let ar = ['x', 'y', 'z', 'w'];
let reverseAr = [];

function reverseArray(ar){
  for(let i = 0; i < ar.length; i++){
    reverseAr.unshift(ar[i])
  }
  return reverseAr
}

console.log(reverseArray(ar))

//--------------WHILE-----------------

let reverseArWhile = [];
function reverseArrayWhile(ar){
  i = 0;
  while(i < ar.length){
    reverseArWhile.unshift(ar[i])
    i++
  }
  return reverseArWhile
}

console.log(reverseArrayWhile(ar))

//--------------REVERSE-----------------

const reversed = [...ar].reverse();

console.log(reversed)