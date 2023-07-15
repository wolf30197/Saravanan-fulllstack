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
 