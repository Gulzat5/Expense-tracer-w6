import styled from "styled-components";
export const ExpensesCard = ({ el, onDelete }) => {
  const dateMonth = new Date(el.date).toLocaleString("ru-ru", {
    month: "long",
  });

  const dateYear = new Date(el.date).getFullYear();

  return (
    <Idiv className="iDiv">
      <div>
        <ul className="left-side">
          <Pdate className="p-date">
            <span className="dateMothSpan">{dateMonth}</span>
            <span>{dateYear}</span>
            <Span>{new Date(el.date).getDate()}</Span>
          </Pdate>
          <Title>{el.title}</Title>
        </ul>
        <ConPrice className="conPrice">
          <Price className="price">{el.price} $</Price>
        </ConPrice>
        <Delete className="delete" onClick={() => onDelete(el.id)}>
          Delete
        </Delete>
      </div>
    </Idiv>
  );
};
const Idiv = styled.div`
  margin-top: 0px;
  background-color: #ad9be9;
  width: 700px;
  height: 90px;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;
const Pdate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
  margin: 0px 0px 0px -24px;
  width: 84px;
  height: 90px;
  background: #2a2a2a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0px;
  gap: 5px;
`;
const Span = styled.span`
  font-weight: 700;
  font-size: 14px;
`;
const Title = styled.p`
  position: absolute;
  margin: -55px 0px 0px 75px;
  font-weight: 600;
  color: #ffffff;
  font-size: 18px;
  list-style: none;
`;
const Price = styled.p`
  margin: 8px 0px 0px 20px;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
`;
const Delete = styled.button`
  width: 100px;
`;
const ConPrice = styled.div`
  margin: -65px 0px 0px 530px;
  width: 112px;
  height: 44px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  background-color: #40005d;
  list-style: none;
`;
