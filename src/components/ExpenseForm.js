import React, { useState } from 'react';

const ExpenseForm = () => {
    const [expense, setExpense] = useState({ title: '', amount: '', date: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpense({ ...expense, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Expense:', expense);
        // Add functionality to handle expense submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" name="title" value={expense.title} onChange={handleChange} required />
            </div>
            <div>
                <label>Amount</label>
                <input type="number" name="amount" value={expense.amount} onChange={handleChange} required />
            </div>
            <div>
                <label>Date</label>
                <input type="date" name="date" value={expense.date} onChange={handleChange} required />
            </div>
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;