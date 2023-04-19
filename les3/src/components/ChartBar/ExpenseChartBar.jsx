import styled from "styled-components";

export const ChartBar = ({ currentPrice, label }) => {
  const maximumPrise = 2000;
  const percent = (100 * currentPrice) / maximumPrise;

  return (
    <ChartBarr>
      <ChartBarr>
        <ChartBarInner>
          <ChartBarFill style={{ height: `${percent}%` }}></ChartBarFill>
        </ChartBarInner>
        <ChartBarLabel></ChartBarLabel>
        {label}
      </ChartBarr>
    </ChartBarr>
  );
};
const ChartBarr = styled.div`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;
const ChartBarInner = styled.div`
  border: 1px solid#313131;
  width: 2rem;
  height: 10rem;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const ChartBarFill = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
`;
const ChartBarLabel = styled.div`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;
