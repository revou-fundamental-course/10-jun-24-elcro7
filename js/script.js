document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const temperatureInput = document.getElementById('temperatureInput').value;
    const temperatureUnit = document.getElementById('temperatureUnit').value;
    const resultElement = document.getElementById('conversionResult');
    const explanationElement = document.getElementById('conversionExplanation');

    let convertedTemperature, explanation;

    if (temperatureUnit === 'celsius') {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        explanation = `${temperatureInput}° Celsius sama dengan ${convertedTemperature.toFixed(2)}° Fahrenheit.`;
    } else {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        explanation = `${temperatureInput}° Fahrenheit sama dengan ${convertedTemperature.toFixed(2)}° Celsius.`;
    }

    resultElement.textContent = convertedTemperature.toFixed(2);
    explanationElement.textContent = explanation;
});