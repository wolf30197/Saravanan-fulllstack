let currentInput = '';
let currentOperator = '';
let storedValue='';

function appendNumber(number) {
  currentInput+=number;
  document.getElementById('screen').innerHTML=currentInput;
}

function appendOperator(operator) {
  currentOperator = operator;
  currentInput+= operator;
  document.getElementById('screen').append( currentOperator);
  
}

function calculate() {
  storedValue = eval(currentInput); 
  currentInput+= storedValue.toString();
  document.getElementById('screen1').append( storedValue);
  
}
    
   
    function clearDisplay(){
      document.getElementById('screen').innerHTML='';
      document.getElementById('screen1').innerHTML='';
    }
  