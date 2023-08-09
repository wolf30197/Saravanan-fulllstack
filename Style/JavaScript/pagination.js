let noOfItems=5;
let page=1;
let productTable= [];

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
   productTable=json
   itemsPage();
  });
  document.addEventListener('DOMContentLoaded', () => {
    let selectElements = document.getElementById('Elements');
    for (let i = 5; i <50; i = i + 5) {
      let option = document.createElement('option');
      option.innerHTML = i;
      selectElements.append(option);
    }
  getTotalPages();
  });
  
  


function previousPage(){
  if(page<=1){
    window.history.go(getTotalPages);
  }else{
    page=page-1;
    itemsPage(); 
  }
    

  }


function nextPage(){
  if(page>=20){
window.history.go(getTotalPages);
  }else{
    page=page+1;
    itemsPage();
  }
    
    
}


let div1=document.createElement('div');

function itemsPage(){

   
    div1.style="width:40%";
    div1.innerHTML=' ';
     for(let i=noOfItems*(page-1);i<=(noOfItems*page)-1;i++){
    let div2=document.createElement('div');
        div2.style="border:5px solid black";
        div2.style="background-color:yellow";
        
        let idata=document.createElement('p');
        idata.innerHTML=productTable[i].userId;
        div2.append(idata);

        let fndata=document.createElement('p');
        fndata.innerHTML=productTable[i].id;
        div2.append(fndata);

        let lndata=document.createElement('p');
        lndata.innerHTML=productTable[i].title;
        div2.append(lndata);

        let edata=document.createElement('p');
        edata.innerHTML=productTable[i].body;
        div2.append(edata);
        div1.append(div2);
  }
  document.body.append(div1);
}

function next(value) {
  noOfItems = value;
  itemsPage();
  getTotalPages()
}


