import Form from "./components/Form/Form";
import Root from "./Root";
import { StyledApp } from "./styled-pages/StyledApp";

const initialValues = {
  to: {
    amount: `0`,
    currency: `CZK`,
  },
  from: {
    amount: `0`,
    currency: `USD`,
  },
};

function App() {
  return (
    <StyledApp>
      <Form initialValues={initialValues}>{() => <Root />}</Form>
    </StyledApp>
  );
}

export default App;
