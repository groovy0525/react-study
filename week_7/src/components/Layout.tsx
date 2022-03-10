import styled from "@emotion/styled";

const Layout: React.FC = ({ children }) => {
  return <Base>{children}</Base>;
};

export default Layout;

const Base = styled.div`
  overflow-y: auto;
  width: 270px;
  height: 540px;
  margin: 50px auto;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.3);
  background-color: #edeced;

  ::-webkit-scrollbar {
    display: none;
  }
`;
