document.addEventListener('DOMContentLoaded',()=>{
    setInterval(function(){
        let date=new Date();
        document.getElementById('hour').innerHTML=date.getHours();
        document.getElementById('min').innerHTML=date.getMinutes();
        document.getElementById('sec').innerHTML=date.getSeconds();
        document.getElementById('msec').innerHTML=date.getMilliseconds();
    },1)
});


let date=new Date();
console.log(date);

//get day method
let date1=new Date();
console.log(date1.getDay());

//get date method
let date2=new Date();
console.log(date2.getDate());

//get month method
let date3=new Date();
console.log(date3.getMonth());

//get year method
let date4=new Date();
console.log(date4.getFullYear());

//get hours method
let date5=new Date();
console.log(date5.getHours());

//get minutes method
let date6=new Date();
console.log(date6.getMinutes());

//get seconds method
let date7=new Date();
console.log(date7.getSeconds());

//get milliseconds method
let date8=new Date();
console.log(date8.getMilliseconds());

//set month method
let set=new Date('2023-06-27');
set.setMonth('11');
console.log(set);

//set date method
let set1=new Date('2023-06-27');
set1.setDate('12');
console.log(set1);

//set year method
let set2=new Date('2023-06-27');
set2.setFullYear('2021');
console.log(set2);

//set hours method
let set3=new Date('2023-06-27');
set3.setHours('12');
console.log(set3);

//set minutes method
let set4=new Date('2023-06-27');
set4.setMinutes('52');
console.log(set4);

//set seconds method
let set5=new Date('2023-06-27');
set5.setSeconds('35');
console.log(set5);

//set milliseconds method
let set6=new Date('2023-06-27');
set6.setMilliseconds('450');
console.log(set6);


//ARRAY METHODS

//length method
let a=[1,6,34,67,89,3,90,5,78,5,66,78,4,5,58];
console.log(a.length);

//push method
let b=['akash','faizal'];
b.push('manoj','santhosh',98);
console.log(b);

//pop method
let d=[3,56,67,'mano'];
d.pop();
console.log(d);

//shift method
let e=['hari',56,67,34,59,'saran',89,789,'ebi'];
e.shift();
console.log(e);

//unshift method
let f=[56,46,456,89,34];
f.unshift('mushfiq',6,'amith');
console.log(f);

//concat method
let g=['karthi','sakthi'];
let k=[27,46,'sam',89];
let l=['yethul',568,'sree',479];
let h=g.concat(k,l);
console.log(h);

//toString method
let m=[34,56,9,2,78,65,34,89,93,61];
console.log(m.toString());

//splice method
let n=[2,4,7,9];
n.splice(2,0,'anish','ajay','nithish');
console.log(n);

//slice method
let o=[7,35,8,38,94,85,89,24,56,'arun',57,'mukesh',18,'vijay'];
let p=o.slice(8);

console.log(p);

//reverse method
let s=['dinesh',54,56,23,567,34,678,984,'Anandhbabu'];
s.reverse();
console.log(s);

//sort method
let z=['v','d','a','g','s','p'];
  z.sort()
  console.log(z);

  //ascending
  let x=[10,45,23,450,358,879,678,954,807];
  x.sort(function(q,f){
    return q-f;
  })
  console.log(x);

  //descending
  x.sort(function(q,f){
    return f-q;
  })
  console.log(x);

  // map() method
  let y=[23,6,45,12,25,33,9,15];
  x=y.map(function(aa){
    return aa*2;
  })
  console.log(x);

  //filter() method
  let w=[13,16,38,46,79,88,96,111];
  z=w.filter(function(ab){
    return ab%2==0;
  })
  console.log(z);

  //asynchronous function
  setTimeout(function(){
    console.log('async');
  },5000)
  console.log('sync');

  //callbacks function
  function multiply(num1,num2,callback)
  {
    num3=num1*num2;
    callback(num3);
  }
  function div(a){
    console.log(a/2)
    return a/2;
  }
  function display(){
    console.log(a);
    return(a);
  }

  multiply(12,10,div);
  multiply(12,10,display);

