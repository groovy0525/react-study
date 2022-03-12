import { useCallback, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Coupon } from "../types";
import Modal from "./Modal";

interface CouponItemProps {
  coupon: Coupon;
}

function CouponItem({ coupon }: CouponItemProps) {
  const [checked, setChecked] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleChecked = useCallback(() => {
    setChecked(prev => !prev);
  }, []);

  return (
    <Base>
      <Checkbox>
        <input type="checkbox" checked={checked} onChange={handleChecked} />
        <Info>
          <Name>{coupon.name}</Name>
          <Rate>{coupon.discount_rate}&#37;</Rate>
        </Info>
      </Checkbox>
      <Button disabled={!checked} checked={checked} onClick={handleOpen}>
        메뉴 선택
      </Button>
      {isOpen && <Modal name={coupon.name} onClose={handleOpen} />}
    </Base>
  );
}

export default CouponItem;

const Base = styled.dd`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin: 0;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;

  > input {
    margin: 0;
    margin-right: 8px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-size: 12px;
  font-weight: 700;
`;

const Button = styled.button<{ checked: boolean }>`
  height: 20px;
  border-radius: 4px;
  background-color: #eee;
  font-size: 10px;
  border: none;
  outline: none;
  color: ${({ checked }) => (checked ? "#000" : "#828182")};
  ${({ checked }) =>
    checked &&
    css`
      cursor: pointer;
    `}
`;

const Rate = styled.span`
  font-size: 10px;
  color: #a199a1;
`;
