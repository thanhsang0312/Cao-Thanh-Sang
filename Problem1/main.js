// Provide 3 unique implementations of the following function in JavaScript.
// Input: n - any integer
// Assuming this input will always produce a result lesser than Number.MAX_SAFE_INTEGER.
// Output: return - summation to n, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.
var sum_to_n_a = function (n) {
  // your code here

  // Using basic loop
  let sum = 0;
  for (let index = 1; index <= n; index++) {
    sum += index;
  }
  return sum;
};

var sum_to_n_b = function (n) {
  // your code here

  // Using arithmetic progression
  return (n / 2) * (1 + n);
};

var sum_to_n_c = function (n) {
  // your code here

  // Using Recursive
  if (n === 1) {
    return 1;
  } else {
    return n + sum_to_n_c(n - 1);
  }
};
console.log(`First way: ${sum_to_n_a(5)}`);
console.log(`Second way: ${sum_to_n_b(5)}`);
console.log(`Third way: ${sum_to_n_c(5)}`);
