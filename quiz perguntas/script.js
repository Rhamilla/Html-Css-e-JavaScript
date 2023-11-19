// Função para verificar a temperatura
function checkTemperature() {
    // Obtém o valor da caixa de entrada pelo ID
    var temperature = document.getElementById("temperatureInput").value;

    // Seleciona o elemento de mensagem pelo ID
    var temperatureMessageElement = document.getElementById("temperatureMessage");

    // Verifica se foi inserida uma temperatura
    if (temperature !== "") {
        // Converte a temperatura para número
        var temperatureValue = parseFloat(temperature);

        // Verifica se a temperatura está acima ou abaixo de 20°C
        if (temperatureValue > 20) {
            temperatureMessageElement.textContent = "Está quente por aqui! ☀️";
        } else {
            temperatureMessageElement.textContent = "Está um pouco frio. 🌬️";
        }
    } else {
        // Se nenhum valor for inserido, exibe uma mensagem de erro
        temperatureMessageElement.textContent = "Por favor, digite a temperatura.";
    }
}

// Função para converter Fahrenheit para Celsius
function convertToCelsius() {
    // Obtém o valor da caixa de entrada pelo ID
    var fahrenheitTemperature = document.getElementById("fahrenheitInput").value;

    // Seleciona o elemento de mensagem pelo ID
    var celsiusConversionMessageElement = document.getElementById("celsiusConversionMessage");

    // Verifica se foi inserida uma temperatura em Fahrenheit
    if (fahrenheitTemperature !== "") {
        // Converte a temperatura para número
        var fahrenheitValue = parseFloat(fahrenheitTemperature);

        // Realiza a conversão para Celsius
        var celsiusValue = (fahrenheitValue - 32) * (5/9);

        // Exibe a mensagem com o resultado
        celsiusConversionMessageElement.textContent = `Em Celsius, isso é aproximadamente ${celsiusValue.toFixed(2)}°C. 🌡️`;
    } else {
        // Se nenhum valor for inserido, exibe uma mensagem de erro
        celsiusConversionMessageElement.textContent = "Por favor, digite a temperatura em Fahrenheit.";
    }
}
