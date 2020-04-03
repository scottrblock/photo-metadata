import styled from "@emotion/styled";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 0.5fr));
  grid-auto-rows: 16rem;
  grid-gap: 0.5rem;
  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(24rem, 0.3fr));
    grid-auto-rows: 24rem;
  }
`;

export default Grid;