import styled from "styled-components";

export const ExpensesFilter = ({
  onChange,
  selectedYear,
  descending,
  ascending,
}) => {
  return (
    <div className="FilterContainer">
      <button onClick={descending}> по убыванию</button>
      <button onClick={ascending}> по возрастанию</button>
      <FilterLabel>
        <LabelContainer style={{ color: "white" }}>
          Filter by year
        </LabelContainer>
        <SelectContainer
          className="SelectContainer"
          value={selectedYear}
          onChange={onChange}
          style={{ width: "120px" }}
        >
          <Option style={{ color: "black" }} value="2023">
            2023
          </Option>
          <Option style={{ color: "black" }} value="2022">
            2022
          </Option>
          <Option style={{ color: "black" }} value="2021">
            2021
          </Option>
          <Option style={{ color: "black" }} value="2020">
            2020
          </Option>
        </SelectContainer>
      </FilterLabel>
    </div>
  );
};
const FilterLabel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LabelContainer = styled.label`
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
`;
const SelectContainer = styled.select`
  display: flex;
  border-radius: 6px;
  padding: 10px 15px 10px 20px;
  gap: 20px;
  outline: none;
  font-weight: 600;
  font-size: 16px;
`;
const Option = styled.option`
  border-radius: 6px;
  font-size: 18px;

  width: 90px;
`;
