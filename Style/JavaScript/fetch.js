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
    let response= await fetch('https://reqres.in/api/users?page=2'); 
    let data= await response.json();
    console.log(data.data);

    let div1=document.createElement('div');
    div1.style="display:flex";
    
    let Data=data.data;
    div1.style="width:60%";



      for(let i=0;i<Data.length;i++){
        let div2=document.createElement('div');
        div2.style="border:5px solid black";
        
        let idata=document.createElement('p');
        idata.innerHTML=Data[i].id;
        div2.append(idata);

        let fndata=document.createElement('p');
        fndata.innerHTML=Data[i].first_name;
        div2.append(fndata);

        let lndata=document.createElement('p');
        lndata.innerHTML=Data[i].last_name;
        div2.append(lndata);

        let edata=document.createElement('p');
        edata.innerHTML=Data[i].email;
        div2.append(edata);

        let timg=document.createElement('img');
        timg.src=Data[i].avatar;
        div2.append(timg);
        div1.append(div2);

        


      }
    

    document.body.append(div1);



    }

    function createXMLRequest(){
      let req=new XMLHttpRequest();
      req.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
          console.log('Request Successfull',this.responseText);
          let response=JSON.parse(this.responseText);
          console.log(response.data);

          let div1=document.createElement('div');
            div1.style="width:50%";
            for(let i=0;i<response.data.length;i++){
              let div2=document.createElement('div');
              div2.style="border:5px solid black";
              let idata=document.createElement('p');
              idata.innerHTML=response.data[i].id;
              div2.append(idata);
      
              let fndata=document.createElement('p');
              fndata.innerHTML=response.data[i].first_name;
              div2.append(fndata);
      
              let lndata=document.createElement('p');
              lndata.innerHTML=response.data[i].last_name;
              div2.append(lndata);
      
              let edata=document.createElement('p');
              edata.innerHTML=response.data[i].email;
              div2.append(edata);
      
              let timg=document.createElement('img');
              timg.src=response.data[i].avatar;
              div2.append(timg);
              div1.append(div2);
      
            
      
      
            }
          
      
          document.body.append(div1);
      



        }
        else if(this.readyState==0){
          console.log('Not initialized');
        }
        else if(this.readyState==1){
           console.log('Server connected');
        }
        else if(this.readyState==2){
          console.log('Request receive');
        }
        else if(this.readyState==3){
          console.log('Request processing');
        }
      }
      req.open('GET','https://reqres.in/api/users?page=1',true);
      req.send();

      

    }
    

    
    
    

       
    

    
    





