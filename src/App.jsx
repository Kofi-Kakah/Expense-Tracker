import "./App.css";
import { useState } from "react"
import useLocalStorage from "./hooks/useLocalStorage.jsx";
import TransactionForm from "./components/TrasactionForm.jsx";
import TransactionList from "./components/TransactionList.jsx";
import Summary from "./components/Summary.jsx"
import Filters from "./components/Filter.jsx"

function App() {
  const [transactions, setTransactions] = useLocalStorage("transactions", []);

  const addTransaction = (transaction) => {
    setTransactions([{ id: Date.now(), ...transaction }, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    category: "all"
  })

  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(filters.search.toLowerCase())
    const matchesType = filters.type === "all" || t.type === filters.type
    const matchesCategory = filters.category === "all" || t.category === filters.category
    return matchesCategory && matchesSearch && matchesType
  })


  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600">Expense Tracker</h1>
      <Summary transactions={transactions} />
      <TransactionForm onAddTransaction={addTransaction} />
      <Filters filters={filters} onChange={setFilters}/>
      <TransactionList transactions={filteredTransactions} onDelete={deleteTransaction} />
    </div>
  );
}

export default App;