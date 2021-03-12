import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LocationButton = styled.div`
  border: 1px solid black;
`;

const NamingWrapper = styled.ul`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  li {
    margin: 1vh;
    list-style: none;
  }
`;

export { ListContainer, LocationButton, NamingWrapper };
