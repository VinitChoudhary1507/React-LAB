import { useState } from 'react';
import Budgetpopup from './Components/Popups/Addbudget'
import ExpensePopup from './Components/Popups/Addexpense'

function App() {
  const [budget, setBudgetPopup] = useState(false);
  const [expense, setExpensePopup] = useState(false);

  const toggleBudget = () => {
    setBudgetPopup(prev => !prev);
  };

  const toggleExpense = () => {
    setExpensePopup(prev => !prev);
  };
  return (
    <>
  
        <div className="container">
          <nav className="navbar  bg-dark-subtle   mt-2 w-100 rounded-3">
            <h2 className="m-3  text-black nav-item">Budget</h2>
            <div>
              <button
                className="btn  me-3 fs-3 ps-4 pe-4 text-black btn-info nav-item"
                aria-label="Add Budget"
                onClick={toggleBudget}
              >
                Add Budget
              </button>
              <button
                className="btn m-2  me-4 fs-3 btn-info text-black nav-item"
                aria-label="Add Expenses"
                onClick={toggleExpense}
              >
                Add Expenses
              </button>
            </div>
          </nav>

        </div>
        {budget === true && <Budgetpopup Budget={() => { setBudgetPopup(false) }} />}
        {expense === true &&
          <ExpensePopup Expense={() => { setExpensePopup(false) }} />
        }
     
    </>
  );
}

export default App;
