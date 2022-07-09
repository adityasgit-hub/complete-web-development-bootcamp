function fibonacciGenerator (n) {

// Do NOT change any of the code above 👆
    
  // Write your code here:
  var output = [];
  var a = -1;
  var b = 1;
  var sum = 0;
    
  for (var i = 0; i < n; i += 1) {
      sum = a + b;
      output.push(sum);
      a = b;
      b = sum;
  }
    
  // Return an array of fibonacci numbers starting from 0.
  return output;
    
// Do NOT change any of the code below 👇
}

var fibonacci = fibonacciGenerator(10);
console.log(fibonacci);
