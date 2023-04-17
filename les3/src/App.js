import "./App.css";
import { Expenses } from "./components/expenses/Expenses";
import { NewExpense } from "./components/newExpense/NewExpense";
import { useState } from "react";
const productt = [
  {
    title: "Flower",
    price: 320,
    date: new Date(2022, 2, 23),
    id: "1",
  },
  {
    title: "Apple",
    price: 335,
    date: new Date(2021, 4, 28),
    id: "2",
  },
  {
    title: "Зарядник",
    price: 500,
    date: new Date("2023, 05, 11"),
    id: "3",
  },
  {
    title: "Мышка",
    price: 200,
    date: new Date("2020, 2, 9"),
    id: "4",
  },
];

function App() {
  const [product, setPdoduct] = useState(productt);

  function addExpenseHandler(data) {
    setPdoduct([...product, data]);
  }

  function deleteExpenses(id) {
    console.log(id);
    const newData = product.filter((el) => el.id !== id);
    setPdoduct(newData);
  }

  return (
    <div className="App">
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses
        data={product}
        onDelete={deleteExpenses}
        setPdoduct={setPdoduct}
      />
    </div>
  );
}

export default App;
