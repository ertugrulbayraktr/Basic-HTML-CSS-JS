document.addEventListener('DOMContentLoaded', function() {
  const textBox = document.getElementById('textBox');
  const toFahrenheit = document.getElementById('toFahrenheit');
  const toCelsius = document.getElementById('toCelsius');
  const result = document.getElementById('result');
  const convertButton = document.querySelector('button');
  
  // Add event listener to button instead of using onclick attribute
  if (convertButton) {
    convertButton.addEventListener('click', convert);
  }
  
  function convert() {
    if (!textBox || !toFahrenheit || !toCelsius || !result) return;
    
    let temp;
    
    if(toFahrenheit.checked){
      temp = Number(textBox.value);
      temp = temp * 9 / 5 + 32;
      result.textContent = temp.toFixed(1) + '°F';
    }
    else if (toCelsius.checked){
      temp = Number(textBox.value);
      temp = (temp - 32) * 5 / 9;
      result.textContent = temp.toFixed(1) + '°C';
    }
    else{
      result.textContent = 'Please select a conversion type';
    }
  }
});