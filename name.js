console.log(`start`);

const {writeFileSync,readFileSync} = require('fs')

console.log(`second`);
const first = readFileSync('./content/first.txt','utf-8')

const last = readFileSync('./content/second.txt','utf-8')


console.log(first,last);

writeFileSync('./content/cosmetic.txt', `this is the content: ${first},${last}`, { flag: 'a' })
console.log(`third`);