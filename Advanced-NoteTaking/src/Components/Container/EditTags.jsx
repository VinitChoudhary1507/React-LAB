import React, { useState } from 'react';

const EditTags = ({ notes, onClose, handleChangedTags }) => {
  const [localNotes, setLocalNotes] = useState(notes);

  const handleTagChange = (e, noteIndex, tagIndex) => {
    console.log("noteIndex",noteIndex)
    console.log("tagIndex",tagIndex)
    const newValue = e.target.value;
    // Update the specific tag in the corresponding note
    const updatedNotes = localNotes.map((note, ni) => {
      if (ni === noteIndex) {
        const updatedTags = note.tags.map((tag, ti) => 
          ti === tagIndex ? newValue : tag
        );
        return { ...note, tags: updatedTags };
      }
      return note;
    });
    setLocalNotes(updatedNotes);
  };

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Tags</h5>
            <button
              onClick={onClose}
              type="button"
              className="btn-close border border-3"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {localNotes.map((note, noteIndex) =>
              note.tags.map((tag, tagIndex) => (
                <input
                  key={`${noteIndex}-${tagIndex}`}
                  value={tag}
                  onChange={(e) => handleTagChange(e, noteIndex, tagIndex)}
                  className="form-control mb-2"
                />
              ))
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={() => handleChangedTags(localNotes)}
              className="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTags;