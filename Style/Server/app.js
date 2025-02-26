console.log('My first Server is running')
var http=require('http');
const express=require('express');
var app=express();
var fileServer=require('fs');
var time=require('./modules/time')
var nodemailer=require('nodemailer');
console.log(time.time)
var server=http.createServer((req,res)=>{
   res.writeHead(200,time.time.toString(),{'Content-Type':'text/html'});
    res.end();
      fileServer.readFile('./index.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end()
      })

      fileServer.appendFile('./newText.txt','Hi There!',(err)=>{
        if(err)
        console,log(err);
        console.log('File Saved');
      })

      fileServer.appendFile('./newFile.html','Hi There!',(err)=>{
        if(err)
        console.log(err);
        console.log('File Saved');
      })
      fileServer.appendFile('./app.html','hi There!',(data)=>{
        if(data)
          console.log(data);
      })

      fileServer.unlink('./newText.html',(err)=>{
        if(err)
        console.log(err);
        console.log('file deleted');
      })

      fileServer.rename('./newFile.html','./rename.html',(err)=>{
        if(err)
        console.log(err);
        console.log('Renamed')
      })
      console.log('error');
      //var transporter=nodemailer.createTransport({
        //service:'gmail',
        //auth:{
          //user:'saravananpopz316@gmail.com',
          //pass:'Saravanan098'
        //}
      //});

     // var mailOptions={
       // from:'saravananpopz316@gmail.com',
        //to:'saravananbtechit1110@gmail.com',
        //subject:'Sending an email from my test project',
        //text:'Hi guys where did you go for that trip'
      //};
      // transporter.sendMail(mailOptions,(err,data)=>{
      //   if(err){
      //     console.log(err)
      //   }
        
      // else{
      //   console.log('Email sent: ',data.response);
      // }
     
      // });

//API Methods Include



}
);

const customMiddleWare=(req,res,next)=>{
  console.log('customMiddleWare Used');
   if(req.body.id==1){
     next()
   }
   else{
     res.send('unauthenticated');
   }
  
 }


 //app.use(customMiddleWare);

// server.listen(8300,()=>{
// console.log('app running');
// });
var mongoose=require('mongoose');
var userSchema=new mongoose.Schema({
  _id:Number,
  name:String,
  address:String
});
var user=mongoose.model('user',userSchema);
//  var userData=[{
//    _id:1,
//    name:'Saravanan',
//    address:'Ooty'
//  },
//  {
//    _id:2,
//    name:'Akash',
//    address:'Dharmapuri'
//  },
//  {
//    _id:3,
//    name:'Arun',
//    address:'Ooty'
//  },
//  {
//   _id:4,
//    name:'Akash',
//    address:'Ooty'
//  },
//  {
//    _id:5,
//    name:'Manojkumar',
//    address:'Dharmapuri'
//  } ,
//  {
//     _id:6,
//     name:'Akash',
//     address:'Dharmapuri'
//     }
//  ]
user.createCollection().then(()=>{
  console.log('collection created')
})
//const filter={_id:6}
const replace={
     name:'Saravanan',
     address:'Ooty'
   }
//const update={address:'Bangalore',name:'Santhosh'}
//user.findByIdAndUpdate(filter,update).then(data=>console.log(data));
user.findOneAndDelete(replace).then(data=>console.log(data));
// var employeeData=[
//   {
//   _id:21,
//   name:'Saravanan',
//   address:'Ooty'
// },
// {
//   _id:22,
//   name:'Akash',
//   address:'Dharmapuri'
// },
// {
//   _id:23,
//   name:'Arun',
//   address:'Ooty'
// },
// {
//  _id:24,
//   name:'Akash',
//   address:'Ooty'
// },
// {
//   _id:25,
//   name:'Manojkumar',
//   address:'Dharmapuri'
// } ,
// {
//    _id:26,
//    name:'Akash',
//    address:'Dharmapuri'
//    }
// ]

// user.insertMany(employeeData).then(value=>{
//   console.log(value)
// })


//  user.insertMany(userData).then(value=>{
//    console.log(value)
//  })
var mongodb=require('mongodb');
//var mongoclient=mongodb.MongoClient;

mongoose.connect('mongodb://localhost:27017/admin').then().then((data)=>{
  console.log(data);
})
//  user.collection.insertOne({
//   _id:10,
//   name:'Manojkumar',
//   address:'Dharmapuri'
//  })
//  //user.collection.insertMany(userData);
//  user.collection.insertOne({
//  _id:3,
//  name:'Saravanan',
//  address:'Nilgiris'
//  })

     //const filter={_id:3}
    //const update = {address: 'Chennai'}
  //   user.updateMany(filter,update).then(data=>console.log(data));
   //user.collection.deleteOne(filter);











app.use(express.json());
app.use(express.urlencoded())
app.listen(5200,()=>{
  console.log('server is running successfully')
})
app.get('/',(req,res)=>{
  res.send('app is running')
  console.log(res);
})
app.get('/student',(req,res)=>{
  let students=[{
    name:'Akash',
    age:24,
    place:'dharmapuri'
  },
  {
    name:'Saravanan',
    age:23,
    place:'ooty'
  },
  {
    name:'Arun',
    age:24,
    place:'ooty'
  }]
  res.send(students);
})

app.post('/students',(req,res)=>{
  res.send('student created');
  console.log(req.body);
})
app.put('/student',customMiddleWare,(req,res)=>{
  res.send('student updated');
  console.log(req.body.id);
})
app.delete('/student',(req,res)=>{
  res.send('student deleted');
  console.log(req.body);
})


app.route('/employees/:empId/batch/:batchId')
.get((req,res)=>{
  console.log(req.params.batchId,req.params.empId);

})
.post((req,res)=>{
  console.log('employee created');
}
)
const math= require('./cars').default;
const result=math.set(10,35);
console.log(result);