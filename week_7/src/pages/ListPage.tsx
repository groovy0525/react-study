import styled from "@emotion/styled";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import Header from "../components/Header";
import Layout from "../components/Layout";
import MenuList from "../components/MenuList";
import { getMenu } from "../features/menu/menuSlice";

function ListPage() {
  const dispatch = useAppDispatch();
  const shopInfo = useAppSelector((state: RootState) => state.menu.data);
  const totalCount = useAppSelector(
    (state: RootState) => state.cart.totalCount
  );

  useEffect(() => {
    dispatch(getMenu());
  }, [dispatch]);

  return (
    <Layout>
      <Header>
        <ShopTitle>{shopInfo?.merchant_name}</ShopTitle>
        <StyledLink to="cart">
          <span>Cart</span>
          <span>{totalCount}</span>
        </StyledLink>
      </Header>
      <MenuList />
    </Layout>
  );
}

export default ListPage;

const ShopTitle = styled.h2`
  margin: 0;
  font-size: 16px;
`;

const StyledLink = styled(Link)`
  margin-left: auto;
  text-decoration: none;
  color: inherit;
  font-weight: 500;

  > span:first-of-type {
    font-size: 14px;
  }

  > span:last-of-type {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-left: 6px;
    background-color: #edeced;
    font-size: 10px;
    text-align: center;
    line-height: 15px;
  }
`;
