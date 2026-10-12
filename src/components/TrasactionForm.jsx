import { useState } from 'react';

const categories = ['Food', 'Transportation', 'Entertainment', 'Bills', 'Shopping', 'Salary', 'Other'];

export default function TransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('Food');

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!description.trim() || !amount ) return

    onAddTransaction({
        title: description.trim(),
        amount: parseFloat(amount),
        type,
        category,
        date: new Date().toISOString().slice(0, 10),
    })

    setDescription('')
    setAmount('')
  }

    return (
        <form onSubmit={handleSubmit} className="mt-6 grid gap-3 rounded-lg border p-4">
            <input type="text" value={description} id="" className="rounded border p-2" placeholder="Title/Description (eg: Lunch)" onChange={(e) => setDescription(e.target.value)} />
            <input className="rounded border p-2" type="number" placeholder="Amoount" value={amount} onChange={(e) => setAmount(e.target.value)}/>

            <div className="flex gap-3">
                <select className="flex-1 rounded border p-2" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>

                <select className="flex-1 rounded border p-2" value={category} onChange={(e) => setCategory(e.target.value)} >
                    {categories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
            </div>
            <button className="rounded bg-blue-600 p-2 font-semibold text-white hover:bg-blue-700">
                Add Transaction
            </button>
        </form>
    )

}