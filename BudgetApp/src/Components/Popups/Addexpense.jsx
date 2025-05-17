import React from 'react';
import { useData } from '.././../Contexts/Context';

const Addexpense = ({ Expense }) => {
    const { state, dispatch, expense, setExpense,budget } = useData();
    const { description, amountSpent, category } = state;
    const all =budget.map(item=>(item.category))
    console.log(all)
    const handleSubmit = () => {
        setExpense([...expense, { description, amountSpent, category }])
        dispatch({ type: 'RESET' })
        Expense()
    };
    return (
        <div className="modal d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-dark-subtle">
                        <h5 className="modal-title">New Expense</h5>
                        <button
                            type="button"
                            className="btn-close border border-4 border-danger"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => Expense()}
                        ></button>
                    </div>
                    <div className="modal-body d-grid gap-3">
                        <label className="fs-5 mb-1" htmlFor="budget-name">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="budget-name"
                            value={description}
                            onChange={(e) => dispatch({ type: 'SET_DESCRIPTION', payload: e.target.value })}
                        />

                        <label className="fs-5 mb-1" htmlFor="max-spending">Maximum Spending</label>
                        <input
                            type="number"
                            className="form-control"
                            id="max-spending"
                            value={amountSpent}
                            onChange={(e) => dispatch({ type: 'SET_AMOUNT_SPENT', payload: e.target.value })}
                        />

                        <label className="fs-5 mb-1" htmlFor="expense-category">Amount</label>
                        <select
                            className="form-select"
                            id="expense-category"
                            value={category}
                            onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: e.target.value })}
                        >
                            {budget.map(item=>(
                                <>
                                <option>Uncatgorized</option>
                                <option>{ item.category}</option>
                                </>
                               ))}
                        </select>
                    </div>
                    <div className="modal-footer bg-body-tertiary">
                        <button type="button" className="btn fs-5 btn-primary" onClick={handleSubmit}>
                            Add Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addexpense;
