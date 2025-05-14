import React, { useReducer } from 'react'
import { useEffect } from 'react';
import Select from 'react-select/base';
import CreatableSelect from 'react-select/creatable';

const initialState = { title: '', tags: '', body: "" };
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload };
    case 'SET_TAGS':
      return { ...state, tags: action.payload };
    case 'SET_BODY':
      return { ...state, body: action.payload };
    default:
      return state;
  }
};

const NewNotes = ({ create, setCreate, onSave }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSaveClick = () => {
    if (create) {
      onSave({
        title: state.title,
        tags: state.tags.map(value=>value.label),
        body: state.body
      });
      setCreate(false);
    } else {
      setCreate(true);
    }
  };
  const handleResetClick = () => {  
    if (create) {
      onSave({
        title: "",
        tags: "",
        body: ""
      });
      setCreate(false);
    } else {
      setCreate(true);
    }
  };
  return (
    <>
      <div className='container'>
        <nav className='navbar mt-2 bg-body-tertiary border rounded-2'>
          <h1 className='ms-3'>Create</h1>
          <button className='btn btn-outline-primary me-5' onClick={() => { create === true ? setCreate(false) : setCreate(true) }}>Back</button>
        </nav>
        <div className='row justify-content-between gap-2 mb-3 mt-4 '>
          <div className="col-5">
            <label htmlFor="title" className=' form-label  text-secondary  '>Title</label>
            <input id="title" onChange={(e) => dispatch({ type: 'SET_TITLE', payload: e.target.value })} placeholder="Create title..." className='mb-2 form-control' type="text" />
          </div>
          <div className="col-5">
            <label className="form-label text-secondary">Tags</label>
            <CreatableSelect
              isMulti
              value={state.tags}
              onChange={(value) =>
                dispatch({ type: 'SET_TAGS', payload: value })
              }
              placeholder="Type and press enter..."
            />

          </div>
        </div>
        <div className=''>
          <label className='ms-2 mb-2 fw-semibold'>Body</label>
          <textarea type="text" onChange={(e) => dispatch({ type: 'SET_BODY', payload: e.target.value })}
            className='form-control ms-2 me-2 fs-6 form-control-lg ' style={{ height: '180px', width: '98%' }} />
          <div className='mt-3 d-flex justify-content-end'>
            <button type='button' onClick={handleSaveClick} className='btn btn-outline-primary me-5'>Save</button>
            <button type='button' onClick={handleResetClick} className='btn btn-outline-primary me-5'>Reset</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default NewNotes