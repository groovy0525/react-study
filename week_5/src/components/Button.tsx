import styled from "styled-components";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  htmlType?: "submit" | "button";
  disabled?: boolean;
}

function Button({
  children,
  onClick,
  htmlType,
  disabled = false,
}: ButtonProps) {
  return (
    <StyledButton
      children={children}
      onClick={onClick}
      type={htmlType}
      disabled={disabled}
    />
  );
}

export default Button;

const StyledButton = styled.button`
  outline: none;
  border: none;
  width: 100px;
  height: 35px;
  padding: 0;
  margin-left: 10px;
  border-radius: 6px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
