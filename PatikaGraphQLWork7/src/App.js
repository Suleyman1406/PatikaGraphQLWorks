import styled from "styled-components";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { FilterProvider } from "./Context/FilterContext";

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

function App() {
  return (
    <FilterProvider>
      <Container>
        <Header />
        <Body />
      </Container>
    </FilterProvider>
  );
}

export default App;
