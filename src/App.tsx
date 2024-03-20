import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
function App() {
  return (
    <>
      <Header />
      <Wrapper>
      <PersonalInfo/>
      <Education/>
      </Wrapper>
    </>
  );
}

export default App;
