document.addEventListener('DOMContentLoaded',()=>{
    setInterval(function(){
        let date=new Date();
        document.getElementById('hour').innerHTML=date.getHours();
        document.getElementById('min').innerHTML=date.getMinutes();
        document.getElementById('sec').innerHTML=date.getSeconds();
        document.getElementById('msec').innerHTML=date.getMilliseconds();
    },1000)
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

