const {writeFile,readFile} = require('fs');
const { resourceLimits } = require('worker_threads');
console.log(`start`);

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(`err`);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{

        if(err){
            console.log(`err`);
            return; 
        }
        const second = result;

        writeFile('./content/cow.txt',`here is the result ${first},${second}`,(err,result)=>{
            if(err){
                console.log('err');
            }
            else{
                console.log('third');
            }
        })

    })


})
console.log(`second`);
