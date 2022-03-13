import styled from "@emotion/styled";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <Base>{children}</Base>;
}

export default Layout;

const Base = styled.div`
  overflow-y: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 270px;
  height: 640px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.3);
  background-color: #edeced;

  ::-webkit-scrollbar {
    display: none;
  }
`;
