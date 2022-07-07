function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / Math.pow(height, 2));
  return bmi;
}

var bmi = bmiCalculator(64, 1.62);
console.log("BMI = " + bmi);
