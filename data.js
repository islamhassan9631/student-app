const fs = require('fs')
const addNote = (id, name,deg,comm,) => {
    const notes = loadNotes()
    const dopl = notes.find((note) => {
        return note.id === id
    })
    const total= deg.reduce((sum,deg)=>sum+=deg)

    if (!dopl) {
        notes.push({
            id,
            name,
            deg,
            comm,
            total,
         

        }

        )
        
        saveNotes(notes)

        console.log('ok');
    }


}

const remove=(id)=>{
    const notes= loadNotes()
    const notesToKeep = notes.filter((note)=>{
        return note.id !== id
    }) 
    if(notesToKeep.length !==notes.length){
        saveNotes(notesToKeep)
    }
}
const read=(id)=>{
    const notes= loadNotes()
    const readToKeep = notes.find((note)=>{
        return note.id== id
    }) 
    if(readToKeep){
        console.log(readToKeep.name,readToKeep.deg,readToKeep.comm,readToKeep.total);
    
    }
}
const list=()=>{
    const notes= loadNotes()
   notes.forEach(element => {
       console.log(element.id);
       console.log(element.name);
       console.log(element.deg);
       console.log(element.comm);
       console.log(element.total);

   });
}

const loadNotes = () => {
    try {
        const data = fs.readFileSync('notes.json').toString()
        return JSON.parse(data)

    }
    catch (e) {
        return []
    }
}
const saveNotes = (notes) => {
    const saveData = JSON.stringify(notes)
    fs.writeFileSync('notes.json', saveData)
}
module.exports = {
    addNote,
    remove,
    read,
    list
}
