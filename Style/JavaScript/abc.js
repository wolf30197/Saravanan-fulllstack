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