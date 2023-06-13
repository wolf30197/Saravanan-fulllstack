let student={
    Name:'manojkumar',
    age:24,
    department:'b.tech it',
    degree:'B.Tech',
    year:'2023',
    clg:'Rathinam clg',
    place:'coimbatore'
}

let num4=28;

let arr1=[25,35,45,56,89,73]
let num3=15;

let num1=20;
let num2=35;
let result;

function add(){
    result=num1+num2;
    alert(result);
}

function multiply(){
    result = num1 * num2;
    alert(result);
}

function sub(){
    result = num1 - num2;
    alert(result);
}

function div(){
    result = num1 / num2;
    alert(result);
}


function modulus(){
    result = num1 % num2;
    alert(result);
}
 
function a(){
    alert(student.age);
}

function b(){
    alert(student.Name);
}

function c(){
    alert(student.department);
}

function d(){
    alert(student.degree);
}

function e(){
    alert(student.year);
}

function f(){
    alert(student.clg);
}

function g(){
    alert(student.place);
}


function arr(){
    alert (arr1[3]);
}

function odd(){
    result=num2%2;
    alert(result);
}

function neg(){
    if(num3<10){
      alert('it is a negative number');

    }else if(num3>10)
    {
        alert('it is a positive number');
    }
}


function k(x){
 alert(typeof(x));
}

k('sathy');


function l(y){
    alert(typeof(y));
}

l(20);

function mod(x){
    alert(typeof(x));
}


mod(true);

function mov(y){
    alert(typeof(y));
}

mov(null);




function over(){
    alert('it is over');
}

function out(){
    alert('it is out');
}

function change(){
    alert('it is change');
}
function down(){
    alert('it is down');
}

function up(){
    alert('it is up');
}

function press(){
    alert('it is press');
}


function ret(){
    if(num4%2==0){
        alert('it is positive number');
    }
    else if(num4%2==1)
    {
        alert('it is negative number');

    }

}
function retn(x,y){
    return x+y;
}

alert(retn(45,73));

function set(num){
    if(num%8==0){
        alert('it is divisible by 8');
        if(num%2==0){
            alert('it is a even number');
        }else if(num%2==1){
            alert('it is a odd number');
        }
    }else if(num%6==0){
        alert('it is divisible by 6');
        if(num%2==0){
            alert('it is a even number');
        }else if(num%2==1){
            alert('it is a odd number');
        }
    }else{
        alert('it is not divisible by 8&6');
    }
}

set(966);

function call(num){
    if(num%9==0){
        alert('it is divisible by 9');
        if(num%2==0){
            alert('it is a even number');
        }else if(num%2==1){
            alert('it is a odd number');
        }
    }else if(num%7==0){
        alert('it is divisible by 7');
        if(num%2==0){
            alert('it is a even number');
        }else if(num%2==1){
            alert('it is a odd number');
        }
    }else{
        alert('it is not divisible by 9&7');
    }
}

call(887);

function meta(alpha){
    switch(alpha){
        case'a':
        alert('it is a vowel');
        break;
        case'e':
        alert('it is a vowel');
        break;
        case'i':
        alert('it is a vowel');
        break;
        case'o':
        alert('it is a vowel');
        break;
        case'u':
        alert('it is a vowel');
        break;
        default:
            alert('it is not a vowel');
    }
}

meta('u');

function met(alter){
    if(alter=='a'){
        alert('it is a vowel');
    }else if(alter=='e'){
        alert('it is a vowel');
    }else if(alter=='i'){
        alert('it is a vowel');
    }else if(alter=='o'){
        alert('it is a vowel');
    }else if(alter=='u'){
        alert('it is a vowel');
    }else{
        alert('it is not a vowel');
    }
}

met('y');

//artithmetic operation
function basicArithmetic(a ,b ,operation){
    switch(operation){
        case'+':
        alert(a+b);
        break;
        case'*':
        alert(a*b);
        break;
        case'-':
        alert(a-b);
        break;
        case'/':
        alert(a/b);
        break;
    }
}

basicArithmetic(10,12,'*');


function arithmetic(a,b,operation){
    if(operation=='+')
    {
        alert(a+b);
    }else if(operation=='-')
    {
        alert(a-b);
    }else if(operation=='/')
    {
        alert(a/b);
    }else
    {
        alert(a*b);
    }
}

arithmetic(10,25,'-');


let array1;
array1=[1,2,3,4,5,6,7,8,9,10];
 for(let i=0;i<10;i++){
    if(i%2==0){
        console.log('Odd',array1[i]);
    }
    else if(i%2==1){
        console.log('even',array1[i]);
    }
    }

    
    for(let i=9;i>=0;i--){
        console.log(array1[i]);
    }

    let j=0;
        while(j<10){
            if(j%2==0){
                console.log('odd',array1[j]);
                j++;
            }else if(j%2==1){
                console.log('Even',array1[j]);
            }
        }
    

    
    do{
        console.log(array1[j]);
    }while(j<10){
        if(j%2==0){
            console.log('odd',array1[j]);
            j++;
        }else if(j%2==1){
            console.log('Even',array1[j]);
        }
    }



 

 