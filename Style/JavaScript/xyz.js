
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

 function tab(){
    let table=document.createElement('table');
    table.style.height='100%';
    
    table.style='border:2px solid black';
    let trheader=document.createElement('tr');
    trheader.style='border:2px solid black';
    let header=document.createElement('th');
    header.style='border:2px solid black';
    header.innerHTML='Monday';
    trheader.append(header);
    table.append(trheader);
    header=document.createElement('th');
    header.style='border:2px solid black';
    header.innerHTML='Tuesday';
    trheader.append(header);
    table.append(trheader);
    header=document.createElement('th');
    header.style='border:2px solid black';
    header.innerHTML='Wednesday';
    trheader.append(header);
    table.append(trheader);
    header=document.createElement('th');
    header.style='border:2px solid black';
    header.innerHTML='Thursday';
    trheader.append(header);
    table.append(trheader);
    header=document.createElement('th');
    header.style='border:2px solid black';
    header.innerHTML='Friday';
    trheader.append(header);
    table.append(trheader);

    
        let elrow=document.createElement('tr');
        let ed=document.createElement('td');
        ed.style='border:2px solid black';
        ed.innerHTML='Tamil';
        elrow.append(ed);
        table.append(elrow);
        ed=document.createElement('td');
        ed.style='border:2px solid black';
        ed.innerHTML='English';
        elrow.append(ed);
        table.append(elrow);
        ed=document.createElement('td');
        ed.style='border:2px solid black';
        ed.innerHTML='Maths';
        elrow.append(ed);
        table.append(elrow);
        ed=document.createElement('td');
        ed.style='border:2px solid black';
        ed.innerHTML='physics';
        elrow.append(ed);
        table.append(elrow);
        ed=document.createElement('td');
        ed.style='border:2px solid black';
        ed.innerHTML='chemistry';
        elrow.append(ed);
        table.append(elrow);

        let tab=document.createElement('tr');
        let set=document.createElement('td');
        set.style='border:2px solid black';
        set.innerHTML='Maths';
        tab.append(set);
        table.append(tab);
         set=document.createElement('td');
         set.style='border:2px solid black';
        set.innerHTML='biology';
        tab.append(set);
        table.append(tab);
        set=document.createElement('td');
        set.style='border:2px solid black';
        set.innerHTML='botany';
        tab.append(set);
        table.append(tab);
         set=document.createElement('td');
         set.style='border:2px solid black';
        set.innerHTML='Maths';
        tab.append(set);
        table.append(tab);
        set=document.createElement('td');
        set.style='border:2px solid black';
        set.innerHTML='physics';
        tab.append(set);
        table.append(tab);

        let sem=document.createElement('tr');
        let sun=document.createElement('td');
        sun.style='border:2px solid black';
        sun.innerHTML='botany';
        sem.append(sun);
        table.append(sem);
        sun=document.createElement('td');
        sun.style='border:2px solid black';
        sun.innerHTML='zoology';
        sem.append(sun);
        table.append(sem);
        sun=document.createElement('td');
        sun.style='border:2px solid black';
        sun.innerHTML='Tamil';
        sem.append(sun);
        table.append(sem);
        sun=document.createElement('td');
        sun.style='border:2px solid black';
        sun.innerHTML='physics';
        sem.append(sun);
        table.append(sem);
        sun=document.createElement('td');
        sun.style='border:2px solid black';
        sun.innerHTML='chemistry';
        sem.append(sun);
        table.append(sem);

        let met=document.createElement('tr');
        let math=document.createElement('td');
        math.style='border:2px solid black';
        math.innerHTML='physics';
        met.append(math);
        table.append(met);
        math=document.createElement('td');
        math.style='border:2px solid black';
        math.innerHTML='zoology';
        met.append(math);
        table.append(met);
        math=document.createElement('td');
        math.style='border:2px solid black';
        math.innerHTML='chemistry';
        met.append(math);
        table.append(met);
        math=document.createElement('td');
        math.style='border:2px solid black';
        math.innerHTML='botany';
        met.append(math);
        table.append(met);
        math=document.createElement('td');
        math.style='border:2px solid black';
        math.innerHTML='English';
        met.append(math);
        table.append(met);

        let doc=document.createElement('tr');
        let model=document.createElement('td');
        model.style='border:2px solid black';
        model.innerHTML='English';
        model.append(doc);
        table.append(model);
        model=document.createElement('td');
        model.style='border:2px solid black';
        model.innerHTML='zoology';
        model.append(doc);
        table.append(model);
        model=document.createElement('td');
        model.style='border:2px solid black';
        model.innerHTML='physics';
        model.append(doc);
        table.append(model);
        model=document.createElement('td');
        model.style='border:2px solid black';
        model.innerHTML='chemistry';
        model.append(doc);
        table.append(model);
        model=document.createElement('td');
        model.style='border:2px solid black';
        model.innerHTML='biology';
        model.append(doc);
        table.append(model);

        let get=document.createElement('tr');
        let give=document.createElement('td');
        give.style='border:2px solid black';
        give.innerHTML='Tamil';
        get.append(give);
        table.append(get);
        give=document.createElement('td');
        give.style='border:2px solid black';
        give.innerHTML='English';
        get.append(give);
        table.append(get);
        give=document.createElement('td');
        give.style='border:2px solid black';
        give.innerHTML='chemistry';
        get.append(give);
        table.append(get);
        give=document.createElement('td');
        give.style='border:2px solid black';
        give.innerHTML='physics';
        get.append(give);
        table.append(get);
        give=document.createElement('td');
        give.style='border:2px solid black';
        give.innerHTML='Maths';
        get.append(give);
        table.append(get);
     document.getElementById('Table').append(table);
     document.getElementById('Table').style.display='block';
     document.getElementById('Image').style.display='none';
      
        
}


function set(){
    let image=document.createElement('img');
    document.getElementById('Image').append(image);
    image.src='./../JavaScript/range rover velar.jpg';
    document.getElementById('Image').style.display='block';
    document.getElementById('Table').style.display='none';
}



// String length check
let name='Saravanan';
console.log(name.length);

//String char check
let name1='sanjaykrishnan is a it professional,he is working in cisco';
console.log(name1.charAt(7));

 //String word replace
console.log(name1.replace('cisco','Amazon'));


//String word replaceall
let name2='sathya is working in data engineer,manoj is working in data engineer,arun is working in data engineer';
let replace=name2.replaceAll('data engineer','Software Tester');
console.log(replace);

// String indexof
console.log(name.indexOf('n'));

//toUpperCase
console.log(name1.toUpperCase());

//toLowerCase
console.log(name1.toLowerCase());

//string join
let firstName='Mukesh Aravind';
let secondName='Mushfiq';
let join=firstName+' '+secondName;
console.log(join);
console.log(firstName+' '+secondName);

// String concat method
let names='Anbu';
let concat=names.concat(' ','Sathya',' ','NithishKumar',' ','ManojKumar');
console.log(concat);

// String split method

console.log(name2.split(' '));

console.log(name2.split(' ,'));

console.log(name2.split(''));

//slice method
let a='sathya is working in data engineer,manoj is working in data engineer';
let slice=a.slice(-21,51);
console.log(slice);

//substring method

let b='sathya is working in data engineer,manoj is working in data engineer';

let substring=b.substring(52,10);
console.log(substring);

//substr method
let c='sathya is working in data engineer,manoj is working in data engineer';

let substr=c.substr(10,7);
console.log(substr);

//includes method

let d='sanjaykrishnan is a it professional,he is working in cisco';
let includes=d.includes('cisco');
console.log(includes);

//startsWith method
let e='sanjaykrishnan is a it professional,he is working in cisco';
let starts=e.startsWith('sanjay');
console.log(starts);

//endsWith method

let f='sanjaykrishnan is a it professional,he is working in cisco';
let ends=f.endsWith('working');
console.log(ends);
console.log(f.endsWith('cisco'));