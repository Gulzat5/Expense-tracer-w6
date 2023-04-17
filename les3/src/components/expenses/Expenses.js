import "./expenses.css";
import { useState } from "react";
import { ExpensesCard } from "./ExpensesCard";
import { ExpensesFilter } from "../ExpensesFilter/ExpensFilter";
import { ExpensesChart } from "../Chart/ExpensesChart";

export const Expenses = ({ data, onDelete, setPdoduct }) => {
  const [selectedYear, setSelectYear] = useState("2023");
  function getSelectValue(event) {
    setSelectYear(event.target.value);
  }
  console.log(data, "DATA");

  const filtredYear = data.filter((el) => {
    const stringifiedYEar = new Date(el.date).getFullYear().toString();
    return stringifiedYEar === selectedYear;
  });

  console.log("filtredYear", filtredYear);
  const descending = () => {
    const plass = filtredYear.sort((a, b) => {
      return new Date(a.date) - new DataTransfer(b.date);
    });
    setPdoduct(plass);
  };

  const ascending = () => {
    const plass = filtredYear.sort((a, b) => {
      return new Date(b.data) - new Date(a.date);
    });
    setPdoduct(plass);
  };

  return (
    <div className="divExp">
      <div className="ExprensesFilter">
        <ExpensesFilter
          getvalue={getSelectValue}
          descending={descending}
          ascending={ascending}
          value={selectedYear}
          onChange={getSelectValue}
        />
      </div>
      <ExpensesChart filtredExpenses={filtredYear} />

      <ul className="ul">
        {filtredYear.map((el) => {
          return (
            <ExpensesCard
              key={el.id}
              el={el}
              value={selectedYear}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    </div>
  );
};
