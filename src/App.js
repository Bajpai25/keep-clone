import React, { useState } from 'react';
import Header from './components/Header';
import {Note} from './components/Note';
import {Area}  from './components/Area';
import Count from './components/Count';
import Footer from './components/Footer';
const App = () => {
  const [notes,setNotes]=useState([])
  function addNote(newNote){
    setNotes(preValue=>{
      return [...preValue,newNote];
    });
  }
  function deleteNotes(id){
    setNotes(preValue=>{
      return[...preValue.filter((note,index)=>
      index!==id)];
    })
  }
  return (
 <>

 <Header/>
 <Count count={notes.length===0? "Empty":`Showing${notes.length}Notes in Database`}/>
 <Area onAdd={addNote}/>
 {notes.map((note,index)=>(
  <Note 
  key={index}
   id={index}
   title={note.title}
    content={note.content}
      onDelete={deleteNotes}
    />
 ))}
 <Footer/>
 </>
  );
}

export default App;
