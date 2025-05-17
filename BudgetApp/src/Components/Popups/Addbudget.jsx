import React from 'react'
import { useData } from '../../Contexts/Context'

const Addbudget = ({Budget}) => {
    const{budget,setBudget,state,dispatch}=useData();
    const{category,plannedBudget}=state; 
       const handleSubmit = () => {
        setBudget([...budget, { category, plannedBudget  }])
        dispatch({ type: 'RESET' })
        Budget()
    };
  return (
<div className="modal d-block" tabindex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header  bg-dark-subtle">
        <h5 className="modal-title">New Budget</h5>
        <button type="button" onClick={()=>Budget()}  className="btn-close  border border-4 border-danger"  data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body d-grid gap-3">
      <div>
              <label className="fs-5 mb-1" htmlFor="budget-name">Name</label>
              <input type="text" className="form-control" id="budget-name" 
               onChange={(e)=>dispatch({type:'SET_CATEGORY',payload:e.target.value})}
              />
            </div>
            <div>
              <label className="fs-5 mb-1" htmlFor="max-spending">Maximum Spending</label>
              <input type="number" className="form-control" id="max-spending"
                onChange={(e)=>dispatch({type:'SET_PLANNED_BUDGET',payload:e.target.value})}
              />
            </div>
      </div>
      <div className="modal-footer bg-body-tertiary">
        <button type="button"  className="btn fs-5  btn-primary"
        onClick={handleSubmit}>Save changes</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Addbudget