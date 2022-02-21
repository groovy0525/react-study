import styled from "styled-components";

const Layout: React.FC = ({ children }) => {
  return <Base>{children}</Base>;
};

export default Layout;

const Base = styled.div`
  max-width: 1024px;
  margin: auto;
  height: 100%;
`;
