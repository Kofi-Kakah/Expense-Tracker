export default function TransactionList ({transactions, onDelete, onEdit}) {
    if (transactions.length === 0) {
        return <p className="mt-6 text-gray-500">No transactions yet.</p>
    }

    return (
        <ul className="mt-6 grid gap-2">
            {transactions.map((t) => (
                <li key={t.id} className="flex items-center justify-between rounded border p-3">
                    <div>
                        <p className="font-semibold">{t.title}</p>
                        <p className="text-sm text-gray-500">{t.category} | {t.date}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className={t.type === "income" ? "font-semibold text-green-600" : "font-semibold text-red-600"}>
                            {t.type === "income" ? "+" : "-"}{t.amount}
                        </span>
                        <button onClick={() => onEdit(t)} className="text-sm text-blue-500 hover:underline">
                            Edit
                        </button>
                        <button onClick={() => onDelete(t.id)} className="text-sm text-red-500 hover:underline">
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}