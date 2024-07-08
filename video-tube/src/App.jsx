import Header from "./components/Header/Header.jsx";
import Body from "./components/Body/Body.jsx";
import { Provider } from "react-redux";
import appStore from "./redux/store/appStore.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage/WatchPage.jsx";
import BodyVideoContainer from "./components/BodyVideoContainer/BodyVideoContainer.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <BodyVideoContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Header />
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
