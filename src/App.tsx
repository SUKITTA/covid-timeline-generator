import { Content, FormContainer, InfoContainer, Typography } from "./components"


function App() {
  return (
    <>
      <Typography.Header>COVID Timeline Genelator</Typography.Header>
      <Content>
        <FormContainer/>
        <InfoContainer/>
      </Content>
    </>
  );
}

export default App;
