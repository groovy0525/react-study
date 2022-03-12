import styled from "@emotion/styled";
import { AiOutlineClose } from "react-icons/ai";
import { useAppSelector } from "../app/hooks";
import { selectOrders } from "../features/cart/cartSlice";
import DiscountItem from "./DiscountItem";

interface ModalProps {
  name: string;
  onClose: () => void;
}

function Modal({ name, onClose }: ModalProps) {
  const discountList = useAppSelector(selectOrders);

  return (
    <Base>
      <Content>
        <Name>
          {name}
          <CloseButton onClick={onClose}>
            <AiOutlineClose />
          </CloseButton>
        </Name>
        {discountList && (
          <ul>
            {discountList.map(item => (
              <DiscountItem key={item.id} item={item} />
            ))}
          </ul>
        )}
      </Content>
    </Base>
  );
}

export default Modal;

const Base = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  max-height: 400px;
  padding: 20px;
  border-radius: 6px;
  background-color: #fff;

  > ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const Name = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0;
  font-size: 14px;
  font-weight: 700;
`;

const CloseButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  > svg {
    vertical-align: middle;
  }
`;
