async function getData(){
    let response= await fetch('https://reqres.in/api/users?page-1');
    let data= await response.json();
    console.log(data);
}
