const data=Process.argv;
console.log(data[2],data[3]);

const os=require('os');
const path=require('path');
const fs =require("fs");
const dns=require('dns')
// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus().length)
// // console.log(oshomedir()).
// console.log(os.totalmem()/(1024*1024*1024)+ "GB");
// console.log(os.freemem()/1024*1024+ "MB");


// const filePath=path.resolve("core_modules.js");
// console.log(filePath);
// console.log(__dirname);



// const filePath=path.join("Lecture 5","Core-D","core_modules.js");
// console.log(filePath);


// const file="Core-D\Lecture 5\core_modules.js"
// console.log(path.basename(file));
// console.log(path.extname(file));
// console.log(path.dirname(file));





// console.log("Deepesh");
// const data=fstat.readFileSync("File.txt","utf-8");
// console.log(data);
// console.log("Yuvraj");




// console.log("Aashish");
// fs.readFile("file.txt","utf-8",(err,data)=>{ // Asynchronous
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log(data);
        
//     }
// })
// console.log("Nitin");





// fs.writeFile("file.txt","hello students",(err)=>{
//     if(err){
//         console.log(err);

//     }
// })


// fs.appendFile("file.txt","\nhello students",(err)=>{
//     if(err){
//         console.log(err);
//     }
// })


// fs.unlink("file1.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }
// })


// const password="Jhon@123"

// const hash=crypto.createHash("sha256").update(password).digest("hex");
// console.log(hash)



// const salt=crypto.randomBytes(16).toString("hex");
// console.log(salt)

// const hash=crypto.createHmac("sha256",salt).update(password).digest("hex");
// console.log(hash)





// dns.lookup("www.google.com",(err,address,family)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(address);
//         console.log(family);
//     }
// })



// dns.reverse("8.8.8.8",(err,hostnames)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(hostnames);
//     }
// })



const data=process.argv;
console.log(data[2],data[3]);