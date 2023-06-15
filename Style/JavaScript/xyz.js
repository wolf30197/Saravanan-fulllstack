



function calculate(value){

    let first=document.getElementById('first').value ;
    let second=document.getElementById('second').value ;
    let operator=document.getElementById('operator').value ;
    switch(operator){
        case'+':
        result= parseInt(first,10)+parseInt(second,10);
        document.getElementById('result').value=result;
        break;
        case'-':
        result=parseInt(first,10)-parseInt(second,10);
        document.getElementById('result').value=result;
        break;
        case'*':
        result=parseInt(first,10)*parseInt(second,10);
        document.getElementById('result').value=result;
        break;
        case'/':
        result=parseInt(first,10)/parseInt(second,10);
        document.getElementById('result').value=result;
        break;

    }
}
