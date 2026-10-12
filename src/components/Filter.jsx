const categories = ['Food', 'Transportation', 'Entertainment', 'Bills', 'Shopping', 'Salary', 'Other'];

export default function Filters({ filters, onChange}) {
    const update = (field, value) => onChange({...filters, [field]: value})

    return (
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <input className="rounded border p-2" placeholder="Search..." value={filters.search} onChange={(e) => update('search', e.target.value)} />

            <select className="rounded border p-2" value={filters.type} onChange={(e) => update('type', e.target.value)}>
                <option value="all">All types</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>

            <select className="rounded border p-2" value={filters.category} onChange={(e) => update('category', e.target.value)}>
                <option value="all">All Categories</option>
                {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>
        </div>
    )
}