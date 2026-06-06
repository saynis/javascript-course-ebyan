// 1. STATE — variables that change over time

let expenses = [];   // the list of all expenses (starts empty)


// 2. DOM REFERENCES — find HTML elements once


const form              = document.querySelector("#expenseForm");
const descriptionInput  = document.querySelector("#description");
const amountInput       = document.querySelector("#amount");
const categorySelect    = document.querySelector("#category");
const expenseList       = document.querySelector("#expenseList");
const totalAmountEl     = document.querySelector("#totalAmount");
const totalCountEl      = document.querySelector("#totalCount");


// 3. HELPER FUNCTIONS — for showing errors


// Show a red error message under a field
function showError(fieldId, message) {
  const field = document.querySelector("#" + fieldId);
  const errorEl = document.querySelector("#" + fieldId + "-error");

  field.classList.add("error");
  errorEl.textContent = message;
}

// Clear the error on a field
function clearError(fieldId) {
  const field = document.querySelector("#" + fieldId);
  const errorEl = document.querySelector("#" + fieldId + "-error");

  field.classList.remove("error");
  errorEl.textContent = "";
}



// 4. VALIDATION — check the form is correct


// Returns true if all inputs are valid, false otherwise.
function validateForm() {
  let isValid = true;

  // Clear any old errors first
  clearError("description");
  clearError("amount");

  // Get the input values
  const description = descriptionInput.value.trim();
  const amount = amountInput.value;

  // Check description is not empty
  if (description === "") {
    showError("description", "Please enter a description.");
    isValid = false;
  }

  // Check amount is provided
  if (amount === "") {
    showError("amount", "Please enter an amount.");
    isValid = false;
  } else {
    // Convert to a real number and check
    const amountNumber = Number(amount);

    if (isNaN(amountNumber)) {
      showError("amount", "Amount must be a number.");
      isValid = false;
    } else if (amountNumber <= 0) {
      showError("amount", "Amount must be greater than zero.");
      isValid = false;
    }
  }

  return isValid;
}



// 5. ADD AN EXPENSE


function addExpense() {
  // First validate — stop if invalid
  if (!validateForm()) {
    return;
  }

  // Build a new expense object
  const newExpense = {
    id: Date.now(),                
    description: descriptionInput.value.trim(),
    amount: Number(amountInput.value),   
    category: categorySelect.value
  };

  // Add to the array
  expenses.push(newExpense);

  // Clear the form so user can add another
  descriptionInput.value = "";
  amountInput.value = "";
  descriptionInput.focus();

  // Re-render everything to show the new expense
  render();

  console.log("Added:", newExpense);
}


// ─────────────────────────────────────────────
// 6. DELETE AN EXPENSE
// ─────────────────────────────────────────────

function deleteExpense(id) {
  // Keep only expenses whose id is NOT the one we want to delete
  expenses = expenses.filter(function(expense) {
    return expense.id !== id;
  });

  render();
  console.log("🗑️ Deleted expense id:", id);
}





// ─────────────────────────────────────────────
// 7. RENDER — rebuild the UI from the array
// ─────────────────────────────────────────────

function render() {


  // ── Empty state: show friendly message if no expenses ──
  if (expenses.length === 0) {
    expenseList.innerHTML = `
         <div class="empty-state">
         <span class="icon">📭</span>
         <p class="empty-text">No expenses yet.</p>
      </div>`;
  } else {
    // ── Build the list HTML from the array ──
    expenseList.innerHTML = expenses.map((expense) =>{
      return `
        <li class="expense-item">
          <div class="expense-info">
            <p class="expense-description">${expense.description}</p>
            <p class="expense-category">${expense.category}</p>
          </div>
          <div class="expense-amount">
            <p>$${expense.amount.toFixed(2)}</p>
            <button class="delete-btn" data-action="delete" data-id="${expense.id}">Delete</button>
          </div>
        </li>
      `;
    }).join("");  // join to make one big string
  }

  // ── Always update the totals ──
  updateTotals();
}


// ─────────────────────────────────────────────
// 8. UPDATE TOTALS — sum and count
// ─────────────────────────────────────────────

function updateTotals() {
  
  // Sum all amounts using reduce
  const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  totalAmountEl.textContent = `$${total.toFixed(2)}`;
  totalCountEl.textContent = expenses.length;
}



// ─────────────────────────────────────────────
// 9. EVENT LISTENERS — connect to the user
// ─────────────────────────────────────────────

// When the form is submitted
form.addEventListener("submit", (e) => {
  e.preventDefault();   // stop the page from refreshing
  addExpense();
});

// When user types in description, clear its error
descriptionInput.addEventListener("input",()=> {
  if (descriptionInput.classList.contains("error")) {
    clearError("description");
  }
});

// When user types in amount, clear its error
amountInput.addEventListener("input", () => {
  if (amountInput.classList.contains("error")) {
    clearError("amount");
  }
});

// Event delegation — ONE listener handles ALL delete buttons

expenseList.addEventListener("click", (e) => {
  if (e.target.getAttribute("data-action") === "delete") {
    const id = Number(e.target.getAttribute("data-id"));
    deleteExpense(id);
  }
});



// ─────────────────────────────────────────────
// 10. START THE APP
// ─────────────────────────────────────────────

render();
console.log("💰 Expense Tracker ready!");
