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




         



         
         
        
        




   


















