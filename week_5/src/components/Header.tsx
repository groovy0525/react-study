import { useCallback, useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import Button from "./Button";
import Layout from "./Layout";

function Header() {
  const userState = useContext(UserContext);
  const user = userState?.user;
  const setUser = userState!.setUser;

  const [name, setName] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const logIn = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setUser(name);
      localStorage.setItem("USER", name);
      setName("");
    },
    [name, setUser]
  );

  const logOut = useCallback(() => {
    setUser("");
    localStorage.removeItem("USER");
  }, [setUser]);

  return (
    <Base>
      <Layout>
        <Inner>
          {user ? (
            <>
              <NickName>{user}</NickName>
              <Button htmlType="button" onClick={logOut}>
                LogOut
              </Button>
            </>
          ) : (
            <form onSubmit={logIn}>
              <StyledInput type="text" value={name} onChange={onChange} />
              <Button htmlType="submit">LogIn</Button>
            </form>
          )}
        </Inner>
      </Layout>
    </Base>
  );
}

export default Header;

const Base = styled.header`
  height: 100px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  height: 100%;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
`;

const NickName = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
