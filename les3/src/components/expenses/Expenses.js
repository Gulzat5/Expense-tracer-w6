import { useState } from "react";
import { ExpensesCard } from "./ExpensesCard";
import { ExpensesFilter } from "../ExpensesFilter/ExpensFilter";
import { ExpensesChart } from "../Chart/ExpensesChart";
import styled from "styled-components";

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
    <DivExp>
      <ExprensesFilter className="ExprensesFilter">
        <ExpensesFilter
          getvalue={getSelectValue}
          descending={descending}
          ascending={ascending}
          value={selectedYear}
          onChange={getSelectValue}
        />
      </ExprensesFilter>
      <ExpensesChart filtredExpenses={filtredYear} />

      <Ul className="ul">
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
      </Ul>
    </DivExp>
  );
};
const DivExp = styled.div`
  margin-top: 60px;
  background-color: #1f1f1f;
  width: 740px;
  border-radius: 1px;
  padding: 40px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  gap: 20px;
`;

const ExprensesFilter = styled.div`
  padding: 0px 20px 0px 20px;
`;

const Ul = styled.ul`
  padding: 40px 20px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
