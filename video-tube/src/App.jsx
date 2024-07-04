import Header from "./components/Header/Header.jsx";
import Body from "./components/Body/Body.jsx";
import { Provider } from "react-redux";
import appStore from "./redux/store/appStore.jsx";

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Header />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
