let w=[13,16,38,46,79,88,96,111];
  z=w.filter((ab)=>{
    return ab%2==0;
  })
  console.log(z);


  let x=[10,45,23,450,358,879,678,954,807];
  x.sort((q,f)=>{
    return q-f;
  })
  console.log(x);

  x.sort((q,f)=>{
    return f-q;
  })
  console.log(x);



let y=[23,6,45,12,25,33,9,15];
x=y.map((aa)=>{
  return aa*2;
})
console.log(x);



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


  
  
    

    
    
      //Class & Inheritance concept in Javascript

     class Student{
      constructor(fName,lName){
        this.firstName=fName;
        this.lastName=lName;

      }
      getFullName(){
        return this.firstName+" "+this.lastName;
      }
     }  

     let std=new Student('Santhosh','Sandy');
     console.log(std.getFullName());
    

    
    class GetAddress extends Student{
      constructor(fName,lName,address){
        super(fName,lName);
        this.address=address;

      }
      getAddress(){
        return this.getFullName()+this.address;
      }
    }

let s2=new GetAddress('Santhosh','Sandy','Coimbatore');

console.log(s2.getAddress());



class Showroom{
  constructor(bike,price,model){
    this.motorbike=bike;
    this.bikeprice=price;
    this.bikemodel=model;

  }
  getbikeDetails(){
    return this.motorbike+" "+this.bikeprice+" "+this.bikemodel;
  }
}

let data=new Showroom('Yamaha',200000,'R15 V3');
console.log(data.getbikeDetails());

class getManufactured extends Showroom{
        constructor(bike,price,model,place){
          super(bike,price,model);
          this.place=place;
        }
        getPlace(){
          return this.getbikeDetails()+" "+this.place;
        }
}

let s=new getManufactured('Yamaha',200000,'R15 V3','Kozhikode');
console.log(s.getPlace());





class InformationTechnology{
  constructor(cName,Type){
    this.companyName=cName;
    this.companyType=Type;
  }
  getCompanyDetails(){
    return this.companyName+" "+this.companyType;
  }
}
  let Sdata=new InformationTechnology('Cisco','Productbase');
  console.log(Sdata.getCompanyDetails());


  class TechField extends InformationTechnology{
    constructor(cName,Type,location,working){
      super(cName,Type);
         this.companyLocation=location;
         this.companyWorking=working;
    }
    getDetails(){
      return this.getCompanyDetails()+" "+this.companyLocation+" "+this.companyWorking;
    }
  }
let Company=new TechField('Cisco','Productbase','Chennai','Developer')
console.log(Company.getDetails());





class Technology{
  constructor(data,state){
         this.data=data;
         this.state=state;
  }
  get(){
    return this.data+" "+this.state;
  }

}

let set=new Technology('justin','Karnataka');
console.log(set.get());


class Techies extends Technology{
  constructor(data,state,country){
         super(data,state);
         this.countryName=country;
  }
  getdata(){
    return this.get()+" "+this.countryName;
  }
}
let cdata=new Techies('justin','Karnataka','India');
console.log(cdata.getdata());




class jobs{
  constructor(Techie,Telecalling){
    this.techJobs=Techie;
    this.bpoJobs=Telecalling;
  }
  getjob(){
    return this.techJobs+" "+this.bpoJobs;
  }
}
let jData=new jobs('Freshworks','pinnacle');
console.log(jData.getjob());


class work extends jobs{
  constructor(Techie,Telecalling,DataAnalyst,VoiceProcess,seniorDeveloper,ItEngineer){
    super(Techie,Telecalling);
    this.data=DataAnalyst;
    this.voice=VoiceProcess;
    this.developer=seniorDeveloper;
    this.Engineering=ItEngineer;
  }
  getJobDetails(){
    return this.getjob()+" "+this.data+" "+this.voice+" "+this.developer+" "+this.Engineering;
  }
}
let addData=new work('Freshworks','pinnacle','Akash','Malayalam','Cisco','Rathinam');
console.log(addData.getJobDetails());











let noOfElements=10;
let page=2;
let productTable=[];


fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => productTable=json);


function itemspage (){
  for(let i=noOfElements*(page-1);i<=(noOfElements*page)-1;i++){
    console.log(productTable[i]);

  }
  


}




function createXMLRequest1(){
  let req=new XMLHttpRequest();
  req.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
      console.log('Request Successfull',this.responseText);
      let response=JSON.parse(this.responseText);
      
      res=response.data;


      
  }


}
req.open('PUT','https://jsonplaceholder.typicode.com/posts/1',true);
req.send('User','sathish');
}
