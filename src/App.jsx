import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage.jsx";
import TransactionForm from "./components/TrasactionForm.jsx"

function App() {
  const [transactions, setTransactions] = useLocalStorage("transactions", []);

  const addTransaction = (transaction) => {
    setTransactions([{ id: Date.now(), ...transaction }, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };


  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600">Expense Tracker</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <p className="text-gray-600 mt-2">Transactions:{transactions.length}</p>
    </div>
  );
}

export default App;