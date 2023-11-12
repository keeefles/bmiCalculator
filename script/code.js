function calculateBMI() {
    // Get height and weight values from input fields
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    // Check if the values are valid numbers
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerText = 'Please enter valid height and weight.';
    } else {
        // Calculate BMI
        var bmi = weight / Math.pow(height, 2);
        
        // Display the result
        document.getElementById('result').innerText = 'Your BMI is: ' + bmi.toFixed(2);
    }
}