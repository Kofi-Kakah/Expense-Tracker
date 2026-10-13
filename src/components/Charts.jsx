import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"

const COLORS = ["#2563eb", "#16a34a", "#dc2626", "#f59e0b", "#8b5cf6", "#06b6d4", "#ec4899"]

export default function Charts({ transactions }) {
    const totals = {}
    transactions.filter((t) => t.type === "expense").forEach((t) => {
        totals[t.category] = (totals[t.category] || 0) + t.amount
    })

    const data = Object.entries(totals).map(([name, value]) => ({ name, value}))

    if (data.length === 0) return null

    return (
        <div className="mt-6 rounded border p-4" >
            <h2 className="mb-2 font-semibold">Expenses by Category</h2>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={data} dataKey="value" nameKey="name" outerRadius={90}>
                            {data.map((_, i) => (
                                <Cell key={i} fill={COLORS[i % COLORS.length]}/>
                            ))}
                        </Pie>
                        <Tooltip/>
                        <Legend/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}