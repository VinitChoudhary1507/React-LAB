import React from 'react'

const Pages = ({prevPage,nextPage,PageChange}) => {
  return (
    <div style={{ marginTop:"50px"}} >

  {prevPage !== null && (
  <button onClick={() => PageChange(prevPage)} style={{ height: "50px", marginRight: "50px" }}>
    Previous
  </button>
)}

{nextPage !== null && (
  <button onClick={() => PageChange(nextPage)} style={{ height: "50px", marginRight: "50px" }}>
    Next
  </button>
)}
</div>
  )
}

export default Pages