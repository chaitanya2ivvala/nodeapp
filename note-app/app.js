const yargs = require('yargs')
const notes=require('./notes')
yargs.command({
   command:'add',
   describe:'Add the note',
   builder:{
       title:{
           describe:'Note title',
           demandOption:true,
           type:'string'
       },
       body:{
        describe:'Note body',
        demandOption:true,
        type:'string'

       }
       
   },
   handler:(argv)=>{
       notes.addNotes(argv.title,argv.body)
   }
})
yargs.command({
    command:'remove',
    describe:'remove the note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.removeNotes(argv.title)
    }
 })
 yargs.command({
    command:'list',
    describe:'list the note',
    handler:()=>{
        console.log("list note")
        notes.listNotes()

    }
 })
 yargs.command({
    command:'read',
    describe:'read the note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        console.log("read note")
        notes.readNotes(argv.title)
    }
 })
yargs.parse()