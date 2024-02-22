async function getData(){
    let response=await fetch('https://reqres.in/api/users?page=2');
    let data=await response.json();
    console.log(data.data);
    
    let table=document.createElement('table');
    table.style='border:3px solid black';
    let trow=document.createElement('tr');
    let theader=document.createElement('th');
    theader.innerHTML='ID';
    let tfname=document.createElement('th');
    tfname.innerHTML='First Name';
    let tlname=document.createElement('th');
    tlname.innerHTML='Last Name';
    let temail=document.createElement('th');
    temail.innerHTML='Email';
    let tavatar=document.createElement('th');
    tavatar.innerHTML='Avatar';
    trow.append(theader);
    trow.append(tfname);
    trow.append(tlname);
    trow.append(temail);
    trow.append(tavatar);
    table.append(trow);

    data.data.map(function(datas){
        let tr=document.createElement('tr');
        let tdata=document.createElement('td');
        tdata.innerHTML=datas.id;
        tr.append(tdata);

        let tFname=document.createElement('td');
        tFname.innerHTML=datas.first_name;
        tr.append(tFname);

        let tLname=document.createElement('td');
        tLname.innerHTML=datas.last_name;
        tr.append(tLname);

        let tEmail=document.createElement('td');
        tEmail.innerHTML=datas.email;
        tr.append(tEmail);

        let tAvatar=document.createElement('td');
        let timg=document.createElement('img');
        
        timg.src=datas.avatar;
        tAvatar.append(timg);
        tr.append(tAvatar);
        table.append(tr);

    })
    document.body.append(table);
    
}



async function apiData(){
    let response=await fetch('https://reqres.in/api/users?page=1');
    let data=await response.json();
    console.log(data.data);

    let table=document.createElement('table');
    table.style='border:3px solid black';
    let trow1=document.createElement('tr');
    let theader=document.createElement('th');
    theader.innerHTML='ID';
    let tfname1=document.createElement('th');
    tfname1.innerHTML='FirstName';

    let tlname1=document.createElement('th');
    tlname1.innerHTML='Last Name';
    let temail1=document.createElement('th');
    temail1.innerHTML='Email';
    let tavatar1=document.createElement('th');
    tavatar1.innerHTML='Avatar';
    trow1.append(theader);
    trow1.append(tfname1);
    trow1.append(tlname1);
    trow1.append(temail1);
    trow1.append(tavatar1);
    table.append(trow1);

     for(let i=0;i<data.data.length;i++){

        let tr=document.createElement('tr');
        let tdata=document.createElement('td');
        tdata.innerHTML=data.data[i].id;
        tr.append(tdata);

        let tFname=document.createElement('td');
        tFname.innerHTML=data.data[i].first_name;
        tr.append(tFname);

        let tLname=document.createElement('td');
        tLname.innerHTML=data.data[i].last_name;
        tr.append(tLname);

        let tEmail=document.createElement('td');
        tEmail.innerHTML=data.data[i].email;
        tr.append(tEmail);

        let tAvatar=document.createElement('td');
        let timg=document.createElement('img');
         timg.src=data.data[i].avatar;
        tAvatar.append(timg);
        tr.append(tAvatar);
        table.append(tr);

    }



    document.body.append(table);
    
}




         



         
         
    //To fetch api to append a table and style with the table task    
        




  let items=10;
let noOfPage=1;
let pageData=[];






fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((json) => {
   pageData=json
   tableData();
  });


  


let div5=document.createElement('div');
div5.style.margin="3%";
function tableData(){

  let table=document.createElement('table');
  table.setAttribute("id","mytable");
  table.style.border="2px solid black";
  table.style.width="100%";
  table.style.height="60%";
  let tablerow=document.createElement('tr');
  let theader=document.createElement('th');
  theader.style.border="2px solid black";
  theader.innerHTML='UserId';
  let tid=document.createElement('th');
  tid.style.border="2px solid black";
  tid.innerHTML='ID';
  let title=document.createElement('th');
  title.style.border="2px solid black";
  title.innerHTML='Title';
  let tcomplete=document.createElement('th');
  tcomplete.style.border="2px solid black";
  tcomplete.innerHTML='Completed';
  tablerow.append(theader);
  tablerow.append(tid);
  tablerow.append(title);
  tablerow.append(tcomplete);
  table.append(tablerow);
  div5.innerHTML='';

    for(let i=items*(noOfPage-1);i<=(items*noOfPage)-1;i++){
      let trow1=document.createElement('tr');
      trow1.setAttribute("id",'mytablerow');
      let tdata=document.createElement('td');
      tdata.style.border="2px solid black";
      tdata.innerHTML=pageData[i].userId;
      trow1.append(tdata);

      let tdata1=document.createElement('td');
      tdata1.style.border="2px solid black";
      tdata1.innerHTML=pageData[i].id;
      trow1.append(tdata1);

      let tdata2=document.createElement('td');
      tdata2.style.border="2px solid black";
      tdata2.innerHTML=pageData[i].title;
      trow1.append(tdata2);

      let tdata3=document.createElement('td');
      tdata3.style.border="2px solid black";
      tdata3.innerHTML=pageData[i].completed;
      trow1.append(tdata3);

      table.append(trow1);
      div5.append(table);
  }
  document.body.append(div5);
   style();
pageNum();
}

function prev(){
  if(noOfPage<=1){
    window.history.go(1);
  }else{
    noOfPage=noOfPage-1;
    currentPage=currentPage-1;
    tableData();
    pageNum();
    style();
  }

}

function next(){
  if(noOfPage>=20){
    window.history.go(1);
  }else{
    noOfPage=noOfPage+1;
    currentPage=currentPage+1;
    tableData();
    pageNum();
    style();
  }

} 



let currentPage=1;
let totalPage=1;
function pageNum(){
  let pages=document.getElementById('page');
  for(let i=totalPage*(currentPage-1);i<=(totalPage*currentPage);i++){
    pages.innerHTML=i;
  }
}

let color=document.getElementById("mytable");

function style(){
  
  let rcolor=document.getElementsByTagName('tr');
  for(let i=0;i<rcolor.length;i++){
    if(i%2===0){
        rcolor[i].style.backgroundColor="darkgray";
        rcolor[i].style.color="black";
    }
    else{
      rcolor[i].style.backgroundColor="white";
      rcolor[i].style.color="black";
    }
  }

}
  





document.addEventListener('DOMContentLoaded', () => {
  let select = document.getElementById('datas');
  for (let i = 10; i<150; i = i + 10) {
    let selectdata = document.createElement('option');
    selectdata.innerHTML = i;
    select.append(selectdata);
  }
getTotal();
});


function sets(value) {
  items = value;
  tableData();
  style()
  getTotal()
}



//Anonymous Function
let greet=function (name){
  console.log(name);
}

greet('Santhosh');