import React, { useState } from 'react';
import NewNotes from './NewNotes';
import Notes from './Container/notes';
import EditTags from './Container/EditTags';


const MainUI = () => {
  const [create, setCreate] = useState(false);
  const [popup,setPopup] = useState(false)
  const [allNotes, setAllNotes] = useState([]);
  const [notes, setNotes] = useState([]);

  const handleSave = (newNote) => {
    console.log(newNote)
    const updated = [...allNotes, newNote];
    setAllNotes(updated);
    setNotes(updated); // show all notes after adding
  };

  const handleSearchtitle = (value) => {
    const filtered = allNotes.filter(note =>
      note.title.toLowerCase().includes(value.toLowerCase())
    );
 
    setNotes(filtered)

  };
  const handleSearchTags = (value) => {
    const filteredtags =allNotes.filter(note =>
    note.tags.some(tag => 
      tag.toLowerCase().includes(value.toLowerCase())
    )  )
  
    console.log(filteredtags)
       
  
    setNotes(filteredtags)
  


  };
  const handleTagsEdit = () => {
    console.log("hello")
   setPopup(prev => !prev); 
   };
  const handleChangedTags = (note) => {
  
     setAllNotes(note)
      setPopup(prev => !prev); 
   };

  return (
    <>
      {create === false &&
        <div className='container w-auto'>
          <nav className='navbar mt-2 bg-body-tertiary border rounded-4   '>
            <div className="  container-fluid d-flex align-items-center ">
              <h1>Notes</h1>
              <div className="d-flex  ms-auto gap-3 m-0" aria-label="Note actions">
                <button type='button' onClick={() => { create === true ? setCreate(false) : setCreate(true) }} className='btn btn-outline-primary'>Create</button>
                <button type='button' onClick={handleTagsEdit} className='btn btn-outline-primary me-5'>Edit Tags</button>
              </div>
       
            </div>
          </nav>
          <div className='row justify-content-between gap-2 mb-3 mt-4 '>
            <div className="col-5">
              <label htmlFor="title" className=' form-label  text-secondary  '>Title</label>
              <input id="title" onChange={(e)=>{handleSearchtitle(e.target.value)}}placeholder="Search by title..." className='mb-2 form-control' type="text" />
            </div>
            <div className="col-5">
              <label htmlFor="tags" className='form-label text-secondary  '>Tags</label>
              <input id="tags" onChange={(e)=>{handleSearchTags(e.target.value)}} placeholder="Search by tags..." className='mb-2 form-control' type="text" />
            </div>
          </div>
         <Notes notes={notes}/> 
          {popup === true &&   <EditTags handleChangedTags={handleChangedTags} 
          onClose={() => setPopup(false)}  notes={allNotes}/>}
        </div>
      }
      
      {create === true && <NewNotes create={create} setCreate={setCreate} onSave={handleSave} />}
    </>
  );
};

export default MainUI;
