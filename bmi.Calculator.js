function bmiCalculator(weight, height) {
    var bmi = Math.round(weight / Math.pow(height, 2));

    return bmi;
}
