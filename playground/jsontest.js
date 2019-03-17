const fs=require('fs')
const data = fs.readFileSync('data.json')
const data1=data.toString()
const dataparse=JSON.parse(data1)
dataparse.name='venkata'
dataparse.age=22
dataparse.car='lamborgini'
console.log(dataparse)
const datastring=JSON.stringify(dataparse)
console.log(datastring)
const data11 = fs.writeFileSync('data.json',datastring)