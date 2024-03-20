import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./Experience";
import Button from "./components/Button";
function App() {
  return (
    <>
      <Header />
      <Wrapper>
      <PersonalInfo/>
      <Education/>
      <Experience/>
      {/* <Button color="bg-green-500">Preview</Button>
      <Button color="bg-green-400">Reset</Button> */}
      </Wrapper>
    </>
  );
}

export default App;
