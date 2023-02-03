const os = require('os')

const user =os.userInfo()

console.log(user);

console.log(`the system uptime is ${os.uptime} seconds`);

const timer = {
  name: os.type(),
  release: os.release(),
  totalMem:os.totalmem(),
  freMem: os.freemem()  
}
console.log(timer);
// the path module

const path = require('path')
console.log(path.sep);
const filePath = path.join('/index6','index7','second.txt')
console.log(filePath);

//const absolutePath = path.resolve(__dirname,'index6','index7','test.txt');

//console.log(absolutePat);