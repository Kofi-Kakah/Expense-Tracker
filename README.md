<h1 align="center">Expense Tracker</h1>

<p align="center">
  A personal finance management app for tracking income and expenses with
  interactive charts, monthly breakdowns, and persistent local storage.
</p>

<p align="center">
  Built with <strong>React 19</strong>, <strong>Vite 8</strong>, <strong>Tailwind CSS 4</strong>, and <strong>Recharts 3</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Recharts-3-FF6384?logo=chartdotjs&logoColor=white" alt="Recharts 3" />
  <img src="https://img.shields.io/badge/ESLint-10-4B32C3?logo=eslint&logoColor=white" alt="ESLint 10" />
  <img src="https://img.shields.io/badge/LocalStorage-persistence-F7DF1E?logo=javascript&logoColor=black" alt="LocalStorage persistence" />
</p>

<p align="center">
  <a href="#features">Features</a> ·
  <a href="#quick-start">Quick Start</a> ·
  <a href="#project-structure">Project Structure</a> ·
  <a href="#architecture">Architecture</a> ·
  <a href="#components">Components</a> ·
  <a href="#customization">Customization</a>
</p>

---

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Components](#components)
  - [App](#app)
  - [TransactionForm](#transactionform)
  - [TransactionList](#transactionlist)
  - [Summary](#summary)
  - [Charts](#charts)
  - [MonthlyTotals](#monthlytotals)
  - [Filters](#filters)
- [Custom Hooks](#custom-hooks)
  - [useLocalStorage](#uselocalstorage)
- [Data Model](#data-model)
- [Customization](#customization)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Income & Expense Tracking** — Add transactions with a title, amount, type (income/expense), and category
- **Live Summary Dashboard** — Real-time totals for income, expenses, and net balance
- **Interactive Pie Charts** — Visual breakdown of expenses by category using Recharts
- **Monthly Totals Table** — Aggregated income, expense, and net figures grouped by month
- **Full CRUD Operations** — Create, read, update, and delete transactions
- **Search & Filter** — Filter transactions by keyword, type, or category
- **Persistent Storage** — All data is saved to `localStorage` and survives page reloads
- **Responsive Design** — Clean, mobile-friendly UI built with Tailwind CSS utility classes
- **Zero Backend** — Runs entirely in the browser with no server or database required

---

## Technology Stack

| Layer        | Technology                                                                                   |
| ------------ | -------------------------------------------------------------------------------------------- |
| **UI Library**   | [React 19](https://react.dev/) with functional components and hooks                     |
| **Build Tool**   | [Vite 8](https://vite.dev/) — lightning-fast HMR and optimized production builds        |
| **Styling**      | [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite` plugin               |
| **Charts**       | [Recharts 3](https://recharts.org/) — composable charting library for React             |
| **Linting**      | [ESLint 10](https://eslint.org/) with `eslint-plugin-react-hooks` and `react-refresh`   |
| **Persistence**  | Browser `localStorage` via a custom `useLocalStorage` hook                              |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        App (Root)                           │
│                                                             │
│  State: transactions[], filters{}, editing                  │
│  Hook:  useLocalStorage("transactions", [])                 │
│                                                             │
│  ┌───────────┐  ┌────────┐  ┌──────────────┐               │
│  │  Summary   │  │ Charts │  │ MonthlyTotals│               │
│  │ (read)     │  │ (read) │  │   (read)     │               │
│  └───────────┘  └────────┘  └──────────────┘               │
│                                                             │
│  ┌─────────────────┐  ┌─────────┐  ┌─────────────────┐     │
│  │ TransactionForm  │  │ Filters │  │ TransactionList │     │
│  │ (create/update)  │  │ (filter)│  │ (read/delete)   │     │
│  └─────────────────┘  └─────────┘  └─────────────────┘     │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              localStorage (persistence)             │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

**Data flow:** All state lives in `App`. Child components receive data and callbacks via props. The `useLocalStorage` hook synchronizes the `transactions` array with `localStorage` on every change.

---

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) **18+** (LTS recommended)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/expense-tracker.git
cd expense-tracker

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at **http://localhost:5173** by default.

### Production Build

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## Project Structure

```
expense-tracker/
├── public/
│   ├── favicon.svg              # App favicon
│   └── icons.svg                # SVG icon sprite
├── src/
│   ├── components/
│   │   ├── Charts.jsx           # Pie chart — expenses by category
│   │   ├── Filter.jsx           # Search & filter controls
│   │   ├── MontlyTotals.jsx     # Monthly income/expense/net table
│   │   ├── Summary.jsx          # Income / Expense / Balance cards
│   │   ├── TransactionList.jsx  # Scrollable list of transactions
│   │   └── TrasactionForm.jsx   # Add / edit transaction form
│   ├── hooks/
│   │   └── useLocalStorage.jsx  # Custom hook for localStorage sync
│   ├── App.css                  # Tailwind CSS import
│   ├── App.jsx                  # Root component — state & routing
│   └── main.jsx                 # React DOM entry point
├── index.html                   # HTML shell
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
├── package.json                 # Dependencies & scripts
└── README.md                    # ← You are here
```

---

## Components

### App

**File:** [`src/App.jsx`](src/App.jsx)

The root component that owns all application state:

| State             | Type       | Purpose                                         |
| ----------------- | ---------- | ----------------------------------------------- |
| `transactions`    | `Array`    | Full list of income/expense records              |
| `filters`         | `Object`   | Current search text, type filter, category filter|
| `editing`         | `Object\|null` | Transaction currently being edited           |

**Key functions:**

- `addTransaction(t)` — Prepends a new transaction with a generated `id`
- `deleteTransaction(id)` — Removes a transaction by ID
- `updatedTransaction(t)` — Replaces an existing transaction and clears edit mode
- `filteredTransactions` — Derived list filtered by search, type, and category

---

### TransactionForm

**File:** [`src/components/TrasactionForm.jsx`](src/components/TrasactionForm.jsx)

A dual-purpose form for creating **and** editing transactions.

- **Fields:** Title, Amount, Type (income/expense), Category
- **Categories:** Food, Transportation, Entertainment, Bills, Shopping, Salary, Other
- **Edit mode:** When `editing` prop is set, the form pre-fills with existing values and shows "Update Transaction" and "Cancel" buttons
- **Validation:** Prevents submission if title is empty or amount is missing

---

### TransactionList

**File:** [`src/components/TransactionList.jsx`](src/components/TransactionList.jsx)

Renders the filtered list of transactions with:

- Transaction title and category/date metadata
- Color-coded amounts (green for income, red for expenses)
- **Edit** and **Delete** action buttons per item
- Empty state message when no transactions exist

---

### Summary

**File:** [`src/components/Summary.jsx`](src/components/Summary.jsx)

A three-column card layout displaying:

| Card       | Calculation                                    |
| ---------- | ---------------------------------------------- |
| **Income** | Sum of all transactions where `type === "income"` |
| **Expense**| Sum of all transactions where `type === "expense"` |
| **Balance**| Income − Expenses                              |

---

### Charts

**File:** [`src/components/Charts.jsx`](src/components/Charts.jsx)

An interactive **Pie Chart** (powered by Recharts) that visualizes expense distribution across categories.

- Only renders when there is at least one expense transaction
- Uses a 7-color palette: blue, green, red, amber, violet, cyan, pink
- Includes tooltip on hover and a legend

---

### MonthlyTotals

**File:** [`src/components/MontlyTotals.jsx`](src/components/MontlyTotals.jsx)

An HTML table that aggregates transactions by month (`YYYY-MM`):

| Column     | Description                      |
| ---------- | -------------------------------- |
| **Month**  | Year-month grouping key          |
| **Income** | Total income for the month       |
| **Expenses** | Total expenses for the month   |
| **Net**    | Income − Expenses for the month  |

Months are sorted in **descending** order (most recent first). Hidden when no data exists.

---

### Filters

**File:** [`src/components/Filter.jsx`](src/components/Filter.jsx)

A responsive three-column filter bar:

| Control         | Filters by                         |
| --------------- | ---------------------------------- |
| **Search input** | Transaction title (case-insensitive) |
| **Type select**  | `all` / `income` / `expense`       |
| **Category select** | `all` / Food / Transportation / Entertainment / Bills / Shopping / Salary / Other |

All filters apply simultaneously in real time.

---

## Custom Hooks

### useLocalStorage

**File:** [`src/hooks/useLocalStorage.jsx`](src/hooks/useLocalStorage.jsx)

```js
useLocalStorage(key: string, initialValue: any) => [storedValue, setStoredValue]
```

A drop-in replacement for `useState` that persists state to `localStorage`.

| Behavior           | Details                                                  |
| ------------------ | -------------------------------------------------------- |
| **Initialization** | Reads from `localStorage` on mount; falls back to `initialValue` |
| **Sync**           | Writes to `localStorage` via `useEffect` on every state change    |
| **Error handling** | Catches and logs `JSON.parse` / `setItem` errors gracefully       |

---

## Data Model

Each transaction object has the following shape:

```ts
interface Transaction {
  id: number;         // Unique identifier (Date.now())
  title: string;      // Description (e.g., "Lunch", "Monthly Salary")
  amount: number;     // Monetary value (always positive)
  type: "income" | "expense";
  category: string;   // One of: Food, Transportation, Entertainment, Bills, Shopping, Salary, Other
  date: string;       // ISO date string, YYYY-MM-DD
}
```

---

## Customization

### Adding a New Category

Add the category string to the `categories` array in both:

1. [`src/components/TrasactionForm.jsx`](src/components/TrasactionForm.jsx) (line 3)
2. [`src/components/Filter.jsx`](src/components/Filter.jsx) (line 1)

### Changing Chart Colors

Edit the `COLORS` array in [`src/components/Charts.jsx`](src/components/Charts.jsx) (line 3). Each color corresponds to a pie slice in order.

### Modifying the Layout

All styling uses Tailwind CSS utility classes. The main layout container is `max-w-2xl mx-auto p-6` defined in `App.jsx`.

---

## Scripts

| Command            | Description                                     |
| ------------------ | ----------------------------------------------- |
| `npm run dev`      | Start the Vite development server with HMR      |
| `npm run build`    | Create an optimized production build             |
| `npm run preview`  | Preview the production build locally             |
| `npm run lint`     | Run ESLint across the project                    |

---

## Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/my-feature`
3. **Commit** your changes: `git commit -m "feat: add my feature"`
4. **Push** to the branch: `git push origin feature/my-feature`
5. **Open** a Pull Request

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Features

- **Income & Expense Tracking** — Add transactions with a title, amount, type (income/expense), and category
- **Live Summary Dashboard** — Real-time totals for income, expenses, and net balance
- **Interactive Pie Charts** — Visual breakdown of expenses by category using Recharts
- **Monthly Totals Table** — Aggregated income, expense, and net figures grouped by month
- **Full CRUD Operations** — Create, read, update, and delete transactions
- **Search & Filter** — Filter transactions by keyword, type, or category
- **Persistent Storage** — All data is saved to `localStorage` and survives page reloads
- **Responsive Design** — Clean, mobile-friendly UI built with Tailwind CSS utility classes
- **Zero Backend** — Runs entirely in the browser with no server or database required

---

## Technology Stack

| Layer        | Technology                                                                                   |
| ------------ | -------------------------------------------------------------------------------------------- |
| **UI Library**   | [React 19](https://react.dev/) with functional components and hooks                     |
| **Build Tool**   | [Vite 8](https://vite.dev/) — lightning-fast HMR and optimized production builds        |
| **Styling**      | [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite` plugin               |
| **Charts**       | [Recharts 3](https://recharts.org/) — composable charting library for React             |
| **Linting**      | [ESLint 10](https://eslint.org/) with `eslint-plugin-react-hooks` and `react-refresh`   |
| **Persistence**  | Browser `localStorage` via a custom `useLocalStorage` hook                              |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        App (Root)                           │
│                                                             │
│  State: transactions[], filters{}, editing                  │
│  Hook:  useLocalStorage("transactions", [])                 │
│                                                             │
│  ┌───────────┐  ┌────────┐  ┌──────────────┐               │
│  │  Summary   │  │ Charts │  │ MonthlyTotals│               │
│  │ (read)     │  │ (read) │  │   (read)     │               │
│  └───────────┘  └────────┘  └──────────────┘               │
│                                                             │
│  ┌─────────────────┐  ┌─────────┐  ┌─────────────────┐     │
│  │ TransactionForm  │  │ Filters │  │ TransactionList │     │
│  │ (create/update)  │  │ (filter)│  │ (read/delete)   │     │
│  └─────────────────┘  └─────────┘  └─────────────────┘     │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              localStorage (persistence)             │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

**Data flow:** All state lives in `App`. Child components receive data and callbacks via props. The `useLocalStorage` hook synchronizes the `transactions` array with `localStorage` on every change.

---

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) **18+** (LTS recommended)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/expense-tracker.git
cd expense-tracker

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at **http://localhost:5173** by default.

### Production Build

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## Project Structure

```
expense-tracker/
├── public/
│   ├── favicon.svg              # App favicon
│   └── icons.svg                # SVG icon sprite
├── src/
│   ├── components/
│   │   ├── Charts.jsx           # Pie chart — expenses by category
│   │   ├── Filter.jsx           # Search & filter controls
│   │   ├── MontlyTotals.jsx     # Monthly income/expense/net table
│   │   ├── Summary.jsx          # Income / Expense / Balance cards
│   │   ├── TransactionList.jsx  # Scrollable list of transactions
│   │   └── TrasactionForm.jsx   # Add / edit transaction form
│   ├── hooks/
│   │   └── useLocalStorage.jsx  # Custom hook for localStorage sync
│   ├── App.css                  # Tailwind CSS import
│   ├── App.jsx                  # Root component — state & routing
│   └── main.jsx                 # React DOM entry point
├── index.html                   # HTML shell
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
├── package.json                 # Dependencies & scripts
└── README.md                    # ← You are here
```

---

## Components

### App

**File:** [`src/App.jsx`](src/App.jsx)

The root component that owns all application state:

| State             | Type       | Purpose                                         |
| ----------------- | ---------- | ----------------------------------------------- |
| `transactions`    | `Array`    | Full list of income/expense records              |
| `filters`         | `Object`   | Current search text, type filter, category filter|
| `editing`         | `Object\|null` | Transaction currently being edited           |

**Key functions:**

- `addTransaction(t)` — Prepends a new transaction with a generated `id`
- `deleteTransaction(id)` — Removes a transaction by ID
- `updatedTransaction(t)` — Replaces an existing transaction and clears edit mode
- `filteredTransactions` — Derived list filtered by search, type, and category

---

### TransactionForm

**File:** [`src/components/TrasactionForm.jsx`](src/components/TrasactionForm.jsx)

A dual-purpose form for creating **and** editing transactions.

- **Fields:** Title, Amount, Type (income/expense), Category
- **Categories:** Food, Transportation, Entertainment, Bills, Shopping, Salary, Other
- **Edit mode:** When `editing` prop is set, the form pre-fills with existing values and shows "Update Transaction" and "Cancel" buttons
- **Validation:** Prevents submission if title is empty or amount is missing

---

### TransactionList

**File:** [`src/components/TransactionList.jsx`](src/components/TransactionList.jsx)

Renders the filtered list of transactions with:

- Transaction title and category/date metadata
- Color-coded amounts (green for income, red for expenses)
- **Edit** and **Delete** action buttons per item
- Empty state message when no transactions exist

---

### Summary

**File:** [`src/components/Summary.jsx`](src/components/Summary.jsx)

A three-column card layout displaying:

| Card       | Calculation                                    |
| ---------- | ---------------------------------------------- |
| **Income** | Sum of all transactions where `type === "income"` |
| **Expense**| Sum of all transactions where `type === "expense"` |
| **Balance**| Income − Expenses                              |

---

### Charts

**File:** [`src/components/Charts.jsx`](src/components/Charts.jsx)

An interactive **Pie Chart** (powered by Recharts) that visualizes expense distribution across categories.

- Only renders when there is at least one expense transaction
- Uses a 7-color palette: blue, green, red, amber, violet, cyan, pink
- Includes tooltip on hover and a legend

---

### MonthlyTotals

**File:** [`src/components/MontlyTotals.jsx`](src/components/MontlyTotals.jsx)

An HTML table that aggregates transactions by month (`YYYY-MM`):

| Column     | Description                      |
| ---------- | -------------------------------- |
| **Month**  | Year-month grouping key          |
| **Income** | Total income for the month       |
| **Expenses** | Total expenses for the month   |
| **Net**    | Income − Expenses for the month  |

Months are sorted in **descending** order (most recent first). Hidden when no data exists.

---

### Filters

**File:** [`src/components/Filter.jsx`](src/components/Filter.jsx)

A responsive three-column filter bar:

| Control         | Filters by                         |
| --------------- | ---------------------------------- |
| **Search input** | Transaction title (case-insensitive) |
| **Type select**  | `all` / `income` / `expense`       |
| **Category select** | `all` / Food / Transportation / Entertainment / Bills / Shopping / Salary / Other |

All filters apply simultaneously in real time.

---

## Custom Hooks

### useLocalStorage

**File:** [`src/hooks/useLocalStorage.jsx`](src/hooks/useLocalStorage.jsx)

```js
useLocalStorage(key: string, initialValue: any) => [storedValue, setStoredValue]
```

A drop-in replacement for `useState` that persists state to `localStorage`.

| Behavior           | Details                                                  |
| ------------------ | -------------------------------------------------------- |
| **Initialization** | Reads from `localStorage` on mount; falls back to `initialValue` |
| **Sync**           | Writes to `localStorage` via `useEffect` on every state change    |
| **Error handling** | Catches and logs `JSON.parse` / `setItem` errors gracefully       |

---

## Data Model

Each transaction object has the following shape:

```ts
interface Transaction {
  id: number;         // Unique identifier (Date.now())
  title: string;      // Description (e.g., "Lunch", "Monthly Salary")
  amount: number;     // Monetary value (always positive)
  type: "income" | "expense";
  category: string;   // One of: Food, Transportation, Entertainment, Bills, Shopping, Salary, Other
  date: string;       // ISO date string, YYYY-MM-DD
}
```

---

## Customization

### Adding a New Category

Add the category string to the `categories` array in both:

1. [`src/components/TrasactionForm.jsx`](src/components/TrasactionForm.jsx) (line 3)
2. [`src/components/Filter.jsx`](src/components/Filter.jsx) (line 1)

### Changing Chart Colors

Edit the `COLORS` array in [`src/components/Charts.jsx`](src/components/Charts.jsx) (line 3). Each color corresponds to a pie slice in order.

### Modifying the Layout

All styling uses Tailwind CSS utility classes. The main layout container is `max-w-2xl mx-auto p-6` defined in `App.jsx`.

---

## Scripts

| Command            | Description                                     |
| ------------------ | ----------------------------------------------- |
| `npm run dev`      | Start the Vite development server with HMR      |
| `npm run build`    | Create an optimized production build             |
| `npm run preview`  | Preview the production build locally             |
| `npm run lint`     | Run ESLint across the project                    |

---

## Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/my-feature`
3. **Commit** your changes: `git commit -m "feat: add my feature"`
4. **Push** to the branch: `git push origin feature/my-feature`
5. **Open** a Pull Request

---

## License

This project is open source and available under the [MIT License](LICENSE).

