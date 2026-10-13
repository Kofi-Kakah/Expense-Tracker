export default function MontlyTotals ({ transactions }) {
    const months = {}

    transactions.forEach((t) => {
        const month = t.date.slice(0, 7)
        if (!months[month]) months[month] = { income: 0, expense: 0 }
        months[month][t.type] += t.amount
    })

    const rows = Object.entries(months).sort((a,b) => b[0].localeCompare(a[0]))

    if (rows.length === 0) return null

    return (
        <div className="mt-6 rounded border p-4">
            <h2 className="mb-2 font-semibold">Monthly Totals</h2>
            <table className="w-full text-left text-sm">
                <thead>
                    <tr className="text-gray-500">
                        <th className="py-1">Month</th>
                        <th>Income</th>
                        <th>Expenses</th>
                        <th>Net</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(([month, v]) => (
                        <tr key={month} className="border-t">
                            <td className="py-1">{month}</td>
                            <td className="text-green-600">{v.income.toFixed(2)}</td>
                            <td className="text-red-600">{v.expense.toFixed(2)}</td>
                            <td className="font-semibold">{(v.income - v.expense).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}