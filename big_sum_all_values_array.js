const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function bigSum(ar) {
  let sum = BigInt(0);
  for(let number = 0; number < ar.length; number++){
    console.log(typeof(sum));
    sum += BigInt(ar[number]);
  }
  return sum
}

console.log(bigSum(ar))
