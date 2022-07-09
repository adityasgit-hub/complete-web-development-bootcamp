var output = [];

function fizzBuzz() {

  for (var count = 1; count <= 100; count += 1) {
    
    if (count % 3 == 0 && count % 5 == 0) {
      output.push("Fizz Buzz");
    }
    else if (count % 3 == 0) {
      output.push("Fizz");
    }
    else if (count % 5 == 0) {
      output.push("Buzz");
    }
    else {
      output.push(count);
    }
    
  }
  
   console.log(output);
}


fizzBuzz();
