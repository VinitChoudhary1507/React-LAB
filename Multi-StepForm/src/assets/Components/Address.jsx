import React from 'react'

const Address = ({NextPage,lastpage}) => {
     const containerStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    fontFamily: 'Arial, sans-serif',
  };

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  };
  return (
    <>
    <div style={containerStyle}>Address
    <label style={labelStyle} htmlFor="Street">Street</label>
    <input style={inputStyle} type="text" />
    <label style={labelStyle} htmlFor="City">City</label>
    <input style={inputStyle} type="text" />
    <label style={labelStyle}  htmlFor="State">State</label>
    <input style={inputStyle} type="text" />
    <label style={labelStyle} htmlFor="Zip">Zip</label>
    <input style={inputStyle} type="text" />
    <div style={buttonContainerStyle}>

       <button style={buttonStyle} onClick={lastpage}>Back</button>
      <button style={buttonStyle}  onClick={NextPage}>Next</button>
      </div>
    </div>
    </>
  )
}

export default Address