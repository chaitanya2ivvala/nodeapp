const fs = require('fs')
const chalk = require('chalk')
const addNotes = (title,body)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.find((note)=> note.title===title)
    debugger
    //console.log(duplicateNotes)
    if (!duplicateNotes){
        notes.push({
            title,body
        })
        saveNotes(notes)
        console.log('Added a new notes')
    } else {
        console.log('Note title was already taken')
    }
   
}
const removeNotes = (title)=>{
    
    const notes=loadNotes()
    const notesToKeep = notes.filter((note)=>note.title !=title)
    //console.log(notesToKeep)
    //const index = notes.findIndex(x => x.title===title);
    if(notes.length === notesToKeep.length ){
        console.log(chalk.red('no record found'))
    } else{
        
        saveNotes(notesToKeep)
        console.log(chalk.green("note removed Successfully"))
    }

}

const saveNotes = (notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
 
}
const loadNotes=()=>{
    try{
    const databuffer = fs.readFileSync('notes.json')
    const dataJSON = databuffer.toString()
    return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}
const listNotes=()=>{
    const notes=loadNotes()
    notes.filter((note)=>{
        console.log(note.title)})


}
const readNotes = (title)=>{
    
    const notes=loadNotes()
    const notesToRead = notes.find((note)=>note.title ===title)
    
    
    if(!notesToRead){
        console.log(chalk.bold.red('no record found'))
    } else{
        
        console.log(chalk.bold("Title: " + notesToRead.title))
        console.log(chalk.italic("Body: " + notesToRead.body))
    }

}
module.exports= {
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
};