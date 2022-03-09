import styled from "@emotion/styled";

interface ListItemProps {
  name: string;
  price?: number;
}

function ListItem({ name, price }: ListItemProps) {
  return (
    <Base>
      <Name>{name}</Name>
      <Price>{price}</Price>
    </Base>
  );
}

export default ListItem;

const Base = styled.li`
  display: flex;
`;

const Name = styled.h3``;

const Price = styled.span``;
