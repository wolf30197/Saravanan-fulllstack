function add(a,b){
    let result=a*b;
    console.log(result);
}
add(10,12);

 async function apiData1(){
    let response= await fetch("https://dummy.restapiexample.com/api/v1/employees"); 
    let data= await response.json();
    console.log(data.data);



    let table=document.createElement('table');
    table.style='border:5px solid black';
    let trow=document.createElement('tr');
    let theader=document.createElement('th');
    theader.innerHTML='ID';
    let ename=document.createElement('th');
    ename.innerHTML='Employee Name';
    let esalary=document.createElement('th');
    esalary.innerHTML='Employee Salary';
    let eage=document.createElement('th');
    eage.innerHTML='Employee Age';
    trow.append(theader);
    trow.append(ename);
    trow.append(esalary);
    trow.append(eage);
    table.append(trow);
    

    data.data.map(function(apiData){
        let trow1=document.createElement('tr');
        let tdata=document.createElement('td');
        tdata.innerHTML=apiData.id;
        trow1.append(tdata);

        let tdata1=document.createElement('td');
        tdata1.innerHTML=apiData.employee_name;
        trow1.append(tdata1);

        let tdata2=document.createElement('td');
        tdata2.innerHTML=apiData.employee_salary;
        trow1.append(tdata2);

        let tdata3=document.createElement('td');
        tdata3.innerHTML=apiData.employee_age;
        trow1.append(tdata3);

        table.append(trow1);
    })
    document.getElementById('div').append(table);

}


async function setData1(){
    let response= await fetch("https://gorest.co.in/public/v2/posts"); 
    let data= await response.json();
    console.log(data);

    let table=document.createElement('table');
    let row=document.createElement('tr');
    let header=document.createElement('th');
    header.innerHTML='ID';
    let header1=document.createElement('th');
    header1.innerHTML='User ID';
    let header2=document.createElement('th');
    header2.innerHTML='Title';
    let header3=document.createElement('th');
    header3.innerHTML='Body';
    row.append(header);
    row.append(header1);
    row.append(header2);
    row.append(header3);
    table.append(row);

    for(let i=0;i<data.length;i++){
        let row1=document.createElement('tr');
        let data=document.createElement('td');
        data.innerHTML=data[i].id;
        row1.append(data);

        let data1=document.createElement('td');
        data1.innerHTML=data[i].user_id;
        row1.append(data1);

        let data2=document.createElement('td');
        data2.innerHTML='data[i].title';
        row1.append(data2);

        let data3=document.createElement('td');
        data3.innerHTML='data[i].body';
        row1.append(data3);
        table.append(row1);
    }
    document.body.append(table);

}

