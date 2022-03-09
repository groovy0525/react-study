import styled from "@emotion/styled";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import Header from "../components/Header";
import List from "../components/List";
import { getMenu } from "../features/menu/menuSlice";

function ListPage() {
  const dispatch = useAppDispatch();
  const shopInfo = useAppSelector((state: RootState) => state.menu.data);

  useEffect(() => {
    dispatch(getMenu());
  }, [dispatch]);

  return (
    <>
      <Header>
        <ShopTitle>{shopInfo?.merchant_name}</ShopTitle>
        <CartInfo>
          <span>Cart</span>
          <span>0</span>
        </CartInfo>
      </Header>
      <List />
    </>
  );
}

export default ListPage;

const ShopTitle = styled.h2`
  font-size: 20px;
`;

const CartInfo = styled.p`
  > span:first-of-type {
    font-weight: 500;
    font-size: 16px;
  }

  > span:last-of-type {
    font-size: 12px;
  }
`;
