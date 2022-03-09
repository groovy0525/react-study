import styled from "@emotion/styled";

const Header: React.FC = ({ children }) => {
  return <Base>{children}</Base>;
};

export default Header;

const Base = styled.header``;
