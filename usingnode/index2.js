const fs = require("fs");

/*var msg ="hello from Beem"
fs.writeFile("message.txt",msg,function (err)  {
    if (err) throw err;
    console.log("The file has been saved!");
});*/

fs.readFile("./message.txt","utf8",(err,data)=>{
    console.log(data);
});