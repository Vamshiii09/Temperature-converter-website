function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitInput = document.getElementById('unitInput').value;
    const resultDiv = document.getElementById('result');

    // Validate input
    if (isNaN(temperatureInput) || temperatureInput.trim() === '') {
        resultDiv.textContent = 'Please enter a valid number.';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let result = {};
    
    switch (unitInput) {
        case 'celsius':
            result = {
                celsius: temperature,
                fahrenheit: (temperature * 9/5) + 32,
                kelvin: temperature + 273.15
            };
            break;
        case 'fahrenheit':
            result = {
                celsius: (temperature - 32) * 5/9,
                fahrenheit: temperature,
                kelvin: (temperature - 32) * 5/9 + 273.15
            };
            break;
        case 'kelvin':
            result = {
                celsius: temperature - 273.15,
                fahrenheit: (temperature - 273.15) * 9/5 + 32,
                kelvin: temperature
            };
            break;
    }

    resultDiv.innerHTML = `
        Celsius: ${result.celsius.toFixed(2)} °C<br>
        Fahrenheit: ${result.fahrenheit.toFixed(2)} °F<br>
        Kelvin: ${result.kelvin.toFixed(2)} K
    `;
}
