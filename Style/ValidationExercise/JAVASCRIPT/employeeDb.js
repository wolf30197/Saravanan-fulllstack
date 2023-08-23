let items=10;
let noOfPage=1;
let pageData=[];






fetch('https://jsonplaceholder.typicode.com/comments')
  .then((response) => response.json())
  .then((json) => {
   pageData=json
   tableData();
  });


  


let div5=document.createElement('div');
div5.setAttribute('id','div');
div5.style.margin="3%";
function tableData(){

  let table=document.createElement('table');
  table.setAttribute("id","mytable");
  table.style.border="2px solid black";
  table.style.width="100%";
  table.style.height="60%";
  let tablerow=document.createElement('tr');
  let tpostid=document.createElement('th');
  tpostid.style.border="2px solid black";
  tpostid.innerHTML='PostID';
  let tid=document.createElement('th');
  tid.style.border="2px solid black";
  tid.innerHTML='ID';
  let name=document.createElement('th');
  name.style.border="2px solid black";
  name.innerHTML='Name';
  let temail=document.createElement('th');
  temail.style.border="2px solid black";
  temail.innerHTML='Email';
  let tbody=document.createElement('th');
  tbody.style.border="2px solid black";
  tbody.innerHTML='Body';
  let ticon=document.createElement('th');
  ticon.style.width="80px";
  ticon.innerHTML="actions";

  tablerow.append(tpostid);
  tablerow.append(tid);
  tablerow.append(name);
  tablerow.append(temail);
  tablerow.append(tbody);
  tablerow.append(ticon);
  table.append(tablerow);

  div5.innerHTML='';

    for(let i=items*(noOfPage-1);i<=(items*noOfPage)-1;i++){
      let trow1=document.createElement('tr');
      trow1.setAttribute("id",'mytablerow');
      let tdata=document.createElement('td');
      tdata.style.border="2px solid black";
      tdata.innerHTML=pageData[i].postId;
      trow1.append(tdata);

      let tdata1=document.createElement('td');
      tdata1.style.border="2px solid black";
      tdata1.innerHTML=pageData[i].id;
      trow1.append(tdata1);

      let tdata2=document.createElement('td');
      tdata2.style.border="2px solid black";
      tdata2.innerHTML=pageData[i].name;
      trow1.append(tdata2);

      let tdata3=document.createElement('td');
      tdata3.style.border="2px solid black";
      tdata3.innerHTML=pageData[i].email;
      trow1.append(tdata3);

      let tdata4=document.createElement('td');
      tdata4.style.border="2px solid black";
      tdata4.innerHTML=pageData[i].body;
      trow1.append(tdata4);

      let button=document.createElement('button');
      button.style.width="70px";
      button.innerHTML="Edit";
      trow1.appendChild(button);
      button.addEventListener('click',()=>{
        edit(pageData[i]);
      })

     

      table.append(trow1);
      div5.append(table);
  }
  document.body.append(div5);
   style();
pageNum();
addImageToRows();
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
  if(noOfPage>=50){
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
  for (let i = 20; i<150; i = i + 20) {
    let selectdata = document.createElement('option');
    selectdata.innerHTML = i;
    select.append(selectdata);
  }
getTotal();
style();
});


function sets(value) {
  items = value;
  tableData();
  style()
  getTotal()
}



function addImageToRows(){
  let table=document.getElementById('mytable');
  let rows=table.getElementsByTagName('tr');
  for(let i=1;i<rows.length;i++){
    let row=rows[i];
   
  }
}


function edit(data){
  console.log(data);
  let dialog=document.createElement('div');
  dialog.setAttribute('id','dialog1');
  dialog.style.width="500px";
  dialog.style.height='400px';
  dialog.style.backgroundColor='white';
  dialog.style.boxShadow='20px 20px 10px 15px black';
  dialog.style.position='absolute';
  dialog.style.top='250px';
  dialog.style.left="30%";
  let input=document.createElement('input');
  input.style.margin='7%';
  input.value=data.id;
  let input1=document.createElement('input');
  input1.style.margin='7%';
  input1.value=data.name;
  let input2=document.createElement('input');
  input2.style.margin='7%';
  input2.value=data.email;
  let input3=document.createElement('input');
  input3.style.margin='7%';
  input3.value=data.body;

  let button=document.createElement('button');
  button.setAttribute('onclick','save()');
  button.style.margin='15%';
  button.style.border='none';
  button.style.width='120px';
  button.style.height='30px';
  button.style.borderRadius="20px";
  button.style.backgroundColor='green';
  button.innerHTML='Save';
  let button1=document.createElement('button');
  button1.setAttribute('id','delete');
  button1.setAttribute('onclick','dialog()');
  button1.style.border='none';
  button1.style.width='120px';
  button1.style.height='30px';
  button1.style.borderRadius="20px";
  button1.style.backgroundColor='red';
  button1.innerHTML='Delete';
  dialog.append(input);
  dialog.append(input1);
  dialog.append(input2);
  dialog.append(input3);
  dialog.append(button);
  dialog.append(button1);
  document.body.append(dialog);
  
  
}




function dialog(){
  let dialog=document.createElement('div');
  dialog.setAttribute('id','dialog');
  dialog.style.backgroundColor='white';
  dialog.style.width='200px';
  dialog.style.height='200px';
  dialog.style.boxShadow='20px 20px 15px 10px black';
  dialog.style.position='absolute';
  dialog.style.top='400px';
  dialog.style.left='40%';
  dialog.style.textAlign='center';
  let h4=document.createElement('h5');
  h4.style.fontFamily='sansserif';
  h4.style.margin='10%';
  h4.style.marginTop="20%";
  h4.innerHTML='Are you sure you wanted to delete the employee data';
  let button=document.createElement('button');
  button.setAttribute('onclick','del()');
  button.style.border='none';
  button.style.width='60px';
  button.style.height='30px';
  button.style.borderRadius="20px";
  button.style.backgroundColor='red';
  button.style.marginTop="10%";
  button.innerHTML='Yes';
  let button1=document.createElement('button');
  button1.setAttribute('onclick','no()');
  button1.style.border='none';
  button1.style.width='60px';
  button1.style.height='30px';
  button1.style.marginLeft="2%";
  button1.style.borderRadius="20px";
  button1.style.backgroundColor='green';
  button1.innerHTML='No';
  dialog.append(h4);
  dialog.append(button);
  dialog.append(button1);
  document.body.append(dialog);
  
}

function save(){
  alert('saved items');
  let dis=document.getElementById('dialog1');
  dis.style.display='none';
  
}

function del(){
  alert('your item will be deleted');
  let dia=document.getElementById('dialog');
  dia.style.display='none';
  let dis=document.getElementById('dialog1');
  dis.style.display='none';
  
}

function no(){
  let dia=document.getElementById('dialog');
  dia.style.display='none';
  let dis=document.getElementById('dialog1');
  dis.style.display='none';

}

