import React from 'react'

const notes = ({ notes }) => {
  console.log(notes)
  // const allNotes = notes.flatMap(note => note.tags);
  // console.log(allNotes)
  // const tags = allNotes.flatMap((tag) => tag);
  // console.log(tags)
  return (
    <div className='row row-cols-1 row-cols-md-2 g-4'>
      {notes.map((note, index) => (
        <div key={index} className='col'>
          <div className='card h-100 border-primary-subtle bg-light-subtle'>
            <div className='card-body'>
              <h5 className='card-title text-dark  '>{note.title}</h5>
              <p className='card-text' style={{
                display: '-webkit-box',
                WebkitLineClamp: 7,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>{note.body}</p>
              <footer className='card-text'>
                {note.tags.map((tag, index) => (<small className='text-primary'>
                  <span key={index}>{tag} </span>
                </small>
                ))}
              </footer>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default notes