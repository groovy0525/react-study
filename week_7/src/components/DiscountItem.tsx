import styled from "@emotion/styled";
import { useState } from "react";
import moneyConversion from "../lib/moneyConversion";
import { Order } from "../types";

interface DiscountItemProps {
  item: Order;
}

function DiscountItem({ item }: DiscountItemProps) {
  const [checked, setChecked] = useState<boolean>(item.discountAmout > 0);

  const handleChecked = () => {
    setChecked(prev => !prev);
  };

  return (
    <Base>
      <input type="checkbox" checked={checked} onChange={handleChecked} />
      <Info>
        <ProductName>
          {item.name} x {item.count}
        </ProductName>
        <DiscountCost>
          - {moneyConversion(item.price * item.count)}
        </DiscountCost>
      </Info>
    </Base>
  );
}

export default DiscountItem;

const Base = styled.li`
  display: flex;
  align-items: center;
  height: 60px;

  > input {
    margin: 0;
    margin-right: 8px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.span`
  font-size: 12px;
  font-weight: 700;
`;

const DiscountCost = styled.span`
  font-size: 10px;
  color: #f00;
`;
