// import { Loader } from "@cedcommerce/ounce-ui";
import "./App.css";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";

function App() {
  return (
    <>
      <FirstPage />
      {/* Successfully Onboarding Loader*/}
      {/* <Loader
        title="You are all set!"
        subtitle="Setting up your account"
        percentage={75}
        type="Loader3"
      /> */}
      <SecondPage />
    </>
  );
}

export default App;
