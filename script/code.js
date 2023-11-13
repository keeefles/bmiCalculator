document.getElementById('calculateButton').addEventListener('click', function () {

    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    if (!isNaN(weight) & !isNaN(height) & height > 0) {

        let bmi = weight / ((height / 100) * (height / 100));
        let resultElement = document.getElementById('result');

        let category;
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Healthy Range';
        } else if (bmi >= 25 && bmi <29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }
    
        resultElement.innerHTML = bmi.toFixed(2) + '<br>' + category;
        } else {
        document.getElementById('result').innerHTML = 'Please enter valid weight and height.';
    }
});