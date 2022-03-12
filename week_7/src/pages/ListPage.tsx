import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Header from "../components/Header";
import Layout from "../components/Layout";
import MenuList from "../components/MenuList";
import { selectCount } from "../features/cart/cartSlice";
import { getMenu, loading, storeInfo } from "../features/menu/menuSlice";

function ListPage() {
  const dispatch = useAppDispatch();
  const store = useAppSelector(storeInfo);
  const totalCount = useAppSelector(selectCount);
  const isLoading = useAppSelector(loading);

  useEffect(() => {
    if (!store) {
      dispatch(getMenu());
    }
  }, [dispatch, store]);

  return (
    <Layout>
      {isLoading && (
        <Loading>
          <Loading>
            <span></span>
            <p>Loading...</p>
          </Loading>
        </Loading>
      )}
      <Header>
        <ShopTitle>{store?.merchant_name}</ShopTitle>
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

const loadingSpinner = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;

  > span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 4px solid #eee;
    border-top-color: #1890ff;
    animation: 1s ${loadingSpinner} linear infinite;
  }

  > p {
    margin-top: 20px;
    font-size: 12px;
  }
`;

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
