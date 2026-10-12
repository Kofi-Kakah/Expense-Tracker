export default function Summary ({ transactions }) {
    const income = transactions.filter((t) => t.type === "income").reduce((sum,t) => sum + t.amount, 0)
    const expenses = transactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0)

    const balance = income - expenses

    return (
        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="rounded border p-3">
                <p className="text-sm text-gray-500">Income</p>
                <p className="font-bold text-green-600">{income.toFixed(2)}</p>
            </div>
            <div className="rounded border p-3">
                <p className="text-sm text-gray-500">Expense</p>
                <p className="font-bold text-green-600">{expenses.toFixed(2)}</p>
            </div>
            <div className="rounded border p-3">
                <p className="text-sm text-gray-500">Balance</p>
                <p className="font-bold">{balance.toFixed(2)}</p>
            </div>
        </div>
    )
}