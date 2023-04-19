import styled from "styled-components";

import { ChartBar } from "../ChartBar/ExpenseChartBar";
export const ExpensesChart = ({ filtredExpenses }) => {
  const months = [
    { label: "Jan", currentPrice: 0 },
    { label: "Feb", currentPrice: 0 },
    { label: "Mar", currentPrice: 0 },
    { label: "Apr", currentPrice: 0 },
    { label: "May", currentPrice: 0 },
    { label: "Jun", currentPrice: 0 },
    { label: "Jul", currentPrice: 0 },
    { label: "Aug", currentPrice: 0 },
    { label: "Sep", currentPrice: 0 },
    { label: "Oct", currentPrice: 0 },
    { label: "Nov", currentPrice: 0 },
    { label: "Dec", currentPrice: 0 },
  ];

  filtredExpenses.forEach((element) => {
    const monthNumber = new Date(element.date).getMonth();
    months[monthNumber].currentPrice += element.price;
  });

  return (
    <ChartContainer>
      {months.map((el) => {
        return <ChartBar key={el.label} />;
      })}
      <ChartBar />
    </ChartContainer>
  );
};
const ChartContainer = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
  margin: 0px 10px 0px 10px;
`;
